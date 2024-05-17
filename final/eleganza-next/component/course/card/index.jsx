// components/card.js
import React from 'react'
import styles from './card.module.scss'

export default function Card({ course, onClick, onAddToCart }) {
  return (
    <div
      className={styles['card-row']}
      onClick={() => onClick(course.course_id)}
    >
      <div className={styles['card-body']}>
        <div className={styles['image-container']}>
          <img
            src={`/images/course_images/${course.course_img}`}
            className={styles['card-image']}
            alt=""
          />
        </div>
        <div className={styles['card-content']}>
          <div className={styles['ul-container']}>
            <div className={styles['text-box']}>
              <p>
                {course.course_style} / {course.teacher_name}老師
              </p>
              <p>{course.course_name}</p>
            </div>
            <div className={styles['text-box']}>
              <p>{course.course_payment}</p>
              {/* <p>{course.course_description}</p> */}
            </div>
            <div className={styles['text-box']}>
              <p>開課日期：{course.start_date}</p>
              <p>開課時間：{course.start_time}</p>
              {course.end_date && <p>結束日期：{course.end_date}</p>}
            </div>
          </div>
        </div>
        <div className={styles['card-footer']}>
          <div className={styles['card-icons']}>
            <img src="/icons/icon-like.svg" alt="Icon 1" />
            <img
              src="/icons/icon-cart.svg"
              alt="Icon 2"
              onClick={(e) => {
                e.stopPropagation() // 阻止事件冒泡，避免点击图标时触发卡片的点击事件
                onAddToCart(course.course_id)
              }}
            />
          </div>
          <div className={styles['card-price']}>
            <p>${course.course_price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
