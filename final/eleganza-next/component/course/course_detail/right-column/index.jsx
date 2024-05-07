import React from 'react'
import styles from './rightcolumn.module.scss'

export default function CourseDetailRight() {
  return (
    <>
      <div className="right-column col-6">
        <div className={styles['grid-item-right']}>
          <div className={styles['course-details-title']}>
            <p>
              爵士&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;藍調&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;黃俊賢&nbsp;&nbsp;教師
            </p>
            <h1>小提琴演奏中階個別課</h1>
            <div className={styles['stars-container']}>
              <div className={styles['stars']}>
                <img src="/icons/icon-star-solid.svg" alt="" />
                <img src="/icons/icon-star-solid.svg" alt="" />
                <img src="/icons/icon-star-solid.svg" alt="" />
                <img src="/icons/icon-star-solid.svg" alt="" />
                <img src="/icons/icon-star.svg" alt="" />
              </div>
              <p>4.3(24)</p>
            </div>
            <h2>$1,800</h2>
            <p>課程時間</p>
            <div className={styles['fc-container']}>
              <div id="example" />
            </div>
            <div className={styles['course-details-title-bottom']}>
              <div className={styles['course-like-icon']}>
                <a href="#">
                  <img src="/icons/icon-like.svg" alt="" />
                </a>
              </div>
              <div className={styles['action-icons']}>
                <a href="#">
                  <img src="/icons/icon-minus.svg" alt="" />
                </a>
                <button>1</button>
                <a href="#">
                  <img src="/icons/icon-plus.svg" alt="" />
                </a>
              </div>
              <button className={styles['course-add-to-cart']}>加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
