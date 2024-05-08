import React, { useState } from 'react'
import styles from './comment.module.scss'
import StarRating from '../star-rating'
import CommentData from '@/data/comment.json'
import Image from 'next/image'

export default function CommentsPage() {
  const [showModal, setShowModal] = useState(false) // 控制模態窗口的顯示狀態

  const toggleModal = () => setShowModal(!showModal) // 切換模態窗口的顯示狀態
  return (
    <>
      <button className={styles['comment-button']} onClick={toggleModal}>
        我要評論
      </button>

      {showModal && ( // 根據 showModal 的值顯示或隱藏模態窗口
        <Modal toggleModal={toggleModal} />
      )}

      {CommentData.map((comment, index) => (
        <div key={index} className={styles['comment-section']}>
          <div className={styles['comment-head']}>
            <img
              src={`/images/article/${comment.avatar}`}
              alt="User Avatar"
              className={styles['user-avatar']}
            />
          </div>
          <div className={styles['comment-body']}>
            <div className={styles['user-name-and-rating']}>
              <h5 className={styles['user-name']}>{comment.user_name}</h5>
              <div className={styles['comment-stars']}>
                {/* <StarRating rating={(comment.article_star, 5)} /> */}
                <StarRating initRating={parseInt(comment.article_star)} />
                <time>{comment.article_date}</time>
              </div>
            </div>
            <p className={styles['comment-text']}>{comment.article_comment}</p>
          </div>
        </div>
      ))}
    </>
  )
}

// 定義模態窗口組件
function Modal({ toggleModal }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const rating = []
    const commentText = []
  }

  return (
    <div className={styles['modal-background']}>
      <div className={styles['modal-content']}>
        {/* 填寫評論 */}
        <form>
          <div className={styles['form-group']}>
            <label for="star-rating">評分:</label>
            <StarRating
              onRatingChange={(rating) => console.log(rating)}
              id="star-rating"
            />
          </div>
          <div className={styles['form-group']}>
            <label for="comment-text">
              <div className={styles['form-word']}>評論:</div>
              <textarea id="comment-text" rows="4" cols="50"></textarea>
            </label>
          </div>
          <button type="submit" className={styles['button-form']}>
            送出
          </button>
          <button
            type="button"
            className={styles['button-form']}
            onClick={toggleModal}
          >
            關閉
          </button>
        </form>
      </div>
    </div>
  )
}
