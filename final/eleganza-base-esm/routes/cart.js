import express from 'express'
import db from '../configs/mysql2.js' // 引用資料庫連接
import authenticate from '#middlewares/authenticate.js' // 身份驗證中介軟體

const router = express.Router()

// 取得用戶購物車內容
router.get('/', authenticate, async (req, res) => {
  const userId = req.user.id // 使用身份驗證
  const [cartItems] = await db.query(
    'SELECT * FROM shopping_cart WHERE user_id = ?',
    [userId]
  )
  res.json({ status: 'success', data: cartItems })
})

// 加入產品到購物車
router.post('/', authenticate, async (req, res) => {
  const { product_id, course_id, product_price, course_price, quantity } =
    req.body
  const userId = req.user.id

  const [result] = await db.query(
    'INSERT INTO shopping_cart (user_id, product_id, course_id, product_price, course_price, quantity) VALUES (?, ?, ?, ?, ?, ?)',
    [userId, product_id, course_id, product_price, course_price, quantity]
  )

  res.json({
    status: 'success',
    data: {
      id: result.insertId,
      product_id,
      course_id,
      product_price,
      course_price,
      quantity,
    },
  })
})

// 更新購物車項目
router.put('/:product_id', authenticate, async (req, res) => {
  const { quantity } = req.body
  const userId = req.user.id
  const { product_id } = req.params

  try {
    const [cartItem] = await db.query(
      'SELECT * FROM shopping_cart WHERE user_id = ? AND product_id = ?',
      [userId, product_id]
    )

    if (cartItem) {
      await db.query(
        'UPDATE shopping_cart SET quantity = ? WHERE user_id = ? AND product_id = ?',
        [quantity, userId, product_id]
      )
      res.json({ status: 'success', message: 'Quantity updated' })
    } else {
      res.status(404).json({ status: 'error', message: 'Item not found' })
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message })
  }
})

// 移除購物車項目
router.delete('/:product_id', authenticate, async (req, res) => {
  const userId = req.user.id
  const { product_id } = req.params

  try {
    const [cartItem] = await db.query(
      'SELECT * FROM shopping_cart WHERE user_id = ? AND product_id = ?',
      [userId, product_id]
    )

    if (cartItem) {
      await db.query(
        'DELETE FROM shopping_cart WHERE user_id = ? AND product_id = ?',
        [userId, product_id]
      )
      res.json({ status: 'success', message: 'Item removed from cart' })
    } else {
      res.status(404).json({ status: 'error', message: 'Item not found' })
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message })
  }
})

export default router
