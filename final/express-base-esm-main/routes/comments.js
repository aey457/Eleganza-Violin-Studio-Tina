import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
const { Comment } = sequelize.models

router.post('/', async function (req, res) {
  const { userId, articleId, productId, courseId, rating, commentText } =
    req.body
  // 檢查至少有一個 ID 是有效的
  if (!articleId && !productId && !courseId) {
    return res
      .status(400)
      .json({ message: 'At least one ID must be valid to post a comment.' })
  }
  try {
    const newComment = await Comment.create({
      user_id: userId, // 需要與模型名稱相同
      article_id: articleId || null, // 如果無效就設為 null
      product_id: productId || null, // 如果無效就設為 null
      course_id: courseId || null, // 如果無效就設為 null
      comment_star: rating,
      comment_content: commentText,
    })

    return res
      .status(201)
      .json({ status: 'success', data: { comment: newComment } })
  } catch (error) {
    console.error('Error creating comment:', error)
    return res
      .status(500)
      .json({ status: 'error', message: 'Error creating comment' })
  }
})

export default router
