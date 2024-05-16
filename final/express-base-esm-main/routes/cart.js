import express from 'express'
import { Sequelize, QueryTypes } from 'sequelize'
// import ShoppingCart from '##/models/ShoppingCart.js'
// import Product from '##/models/Product.js'
// import Course from '##/models/Course.js'
// import Teacher from '##/models/Teacher.js'
// import authenticate from '#middlewares/authenticate.js'
import morgan from 'morgan' // 引入 morgan

const router = express.Router()
const sequelize = new Sequelize('db_violin', 'Eleganza', '12345', {
  host: 'localhost',
  dialect: 'mysql',
})

router.use(morgan('combined')) // 使用 morgan 中介軟體，並設定輸出格式為 'combined'

router.get('/:userId', async (req, res) => {
  try {
    const user_id = req.params.userId

    const cartItems = await sequelize.query(
      `
      SELECT * 
      FROM shopping_cart 
      LEFT JOIN product ON shopping_cart.product_id = product.product_id
      LEFT JOIN course ON shopping_cart.course_id = course.course_id
      WHERE shopping_cart.user_id = :user_id
      `,
      {
        replacements: { user_id },
        type: QueryTypes.SELECT,
      }
    )

    const total = cartItems.reduce((acc, item) => {
      const itemPrice = item.product_price || item.course_price || 0
      console.log('商品價格:', itemPrice, '數量:', item.quantity)
      return acc + itemPrice * item.quantity
    }, 0)

    console.log('購物車總金額:', total)

    res.json({ status: 'success', data: { cartItems, total } })
  } catch (error) {
    console.error('獲取購物車時出錯:', error)
    console.error('詳細錯誤訊息:', error.message)
    console.error('錯誤堆疊追蹤:', error.stack)
    console.error('完整的錯誤物件:', JSON.stringify(error, null, 2)) // 輸出完整的錯誤物件
    res.status(500).json({ status: 'error', message: '獲取購物車時出錯' })
  }
})

router.put('/update/:shopping_cart_id', async (req, res) => {
  const { shopping_cart_id } = req.params
  const { quantity } = req.body

  try {
    await sequelize.query(
      `
      UPDATE shopping_cart
      SET quantity = :quantity
      WHERE shopping_cart_id = :shopping_cart_id
      `,
      {
        replacements: { quantity, shopping_cart_id },
        type: QueryTypes.UPDATE,
      }
    )

    console.log('成功更新購物車項目')

    res.json({ status: 'success' })
  } catch (error) {
    console.error('更新購物車項目時出錯:', error)
    res.status(500).json({ status: 'error', message: '更新購物車項目時出錯' })
  }
})

router.post('/decrease/:shopping_cart_id', async (req, res) => {
  const { shopping_cart_id } = req.params

  try {
    const cartItem = await sequelize.query(
      `
      SELECT * 
      FROM shopping_cart 
      WHERE shopping_cart_id = :shopping_cart_id
      `,
      {
        replacements: { shopping_cart_id },
        type: QueryTypes.SELECT,
      }
    )

    if (cartItem.length === 0) {
      console.error('未找到要減少的購物車商品:', shopping_cart_id)
      return res
        .status(404)
        .json({ status: 'fail', message: '購物車中未找到該商品' })
    }

    const newQuantity = cartItem[0].quantity - 1

    await sequelize.query(
      `
      UPDATE shopping_cart
      SET quantity = :quantity
      WHERE shopping_cart_id = :shopping_cart_id
      `,
      {
        replacements: { quantity: newQuantity, shopping_cart_id },
        type: QueryTypes.UPDATE,
      }
    )

    console.log('成功減少購物車商品數量')

    res.json({ status: 'success' })
  } catch (error) {
    console.error('減少購物車中商品時出錯:', error)
    res.status(500).json({ status: 'error', message: '減少購物車中商品時出錯' })
  }
})

export default router
