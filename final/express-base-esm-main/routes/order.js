import express from 'express'
import { Sequelize, QueryTypes } from 'sequelize'
import morgan from 'morgan' // 引入 morgan

const router = express.Router()
const sequelize = new Sequelize('db_violin', 'Eleganza', '12345', {
  host: 'localhost',
  dialect: 'mysql',
})

router.use(morgan('combined')) // 使用 morgan 中介軟體，並設定輸出格式為 'combined'

// 新增一個 POST 路由來處理購物車的資料
router.post('/checkout/:userId', async (req, res) => {
  const userId = req.params.userId

  try {
    console.log('User ID:', userId)

    // 從購物車中取得所有該用戶的項目
    const cartItems = await sequelize.query(
      `SELECT * FROM shopping_cart WHERE user_id = ${userId}`,
      { type: QueryTypes.SELECT }
    )

    console.log('Cart Items:', cartItems)

    // 生成不重複的 order_id
    let orderId
    let isDuplicate = true

    while (isDuplicate) {
      orderId = Math.floor(100000000 + Math.random() * 900000000) // 生成9位數亂數
      const existingOrder = await sequelize.query(
        `SELECT order_id FROM order_detail WHERE order_id = ${orderId}`,
        { type: QueryTypes.SELECT }
      )

      if (existingOrder.length === 0) {
        isDuplicate = false
      }
    }

    console.log('Order ID:', orderId)

    // 為每個項目創建一個新的訂單
    for (let item of cartItems) {
      await sequelize.query(
        `INSERT INTO order_detail (order_id, product_id, course_id, num) VALUES (${orderId}, ${item.product_id}, ${item.course_id}, ${item.quantity})`,
        { type: QueryTypes.INSERT }
      )
    }

    console.log('Orders created successfully')

    // 清空該用戶的購物車
    //   await sequelize.query(
    //     `DELETE FROM shopping_cart WHERE user_id = ${userId}`,
    //     { type: QueryTypes.DELETE }
    //   );

    console.log('Shopping cart cleared successfully')

    res.status(200).send({ message: '結帳成功' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send({ message: '結帳失敗', error })
  }
})

export default router
