import React from 'react'
import styles from './comment.module.scss'
import StarRating from '../star-rating'

const CommentCard = ({ comment }) => {
  return (
    <div className={styles['comment-section']}>
      <div className={styles['comment-body']}>
        <div className={styles['user-name-and-rating']}>
          <h5 className={styles['user-name']}>{comment.user_name}</h5>
          <div className={styles['comment-stars']}>
            <StarRating initRating={parseInt(comment.article_star)} />
            <time>{comment.article_date}</time>
          </div>
        </div>
        <p className={styles['comment-text']}>{comment.article_comment}</p>
      </div>
    </div>
  )
}
export default CommentCard
