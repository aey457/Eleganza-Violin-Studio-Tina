import React from 'react'
import Comment from './index'
import CommentData from '@/data/comment.json'

export default function CommentsPage() {
  return (
    <div>
      {CommentData.map((comment, index) => (
        <Comment
          key={index}
          user_id={comment.user_id}
          user_name={comment.user_name}
          product_star={comment.product_star}
          product_date={comment.product_date}
          product_comment={comment.product_comment}
        />
      ))}
    </div>
  )
}
