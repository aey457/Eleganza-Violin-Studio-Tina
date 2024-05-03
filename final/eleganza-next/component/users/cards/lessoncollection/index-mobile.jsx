import React from 'react'
import styles from './lessoncollection-mobile.module.scss'

export default function LessonCollectionCardMobile() {
  return (
    <>
        <div className={styles['productcard']}>
                <img
                    src="/images/teacher_images/WuJunyan.jpg"
                    alt=""
                    className={styles['productcardimg']}
                />
                <div className={styles['product-word']}>
                    <ul className={`${styles.productcardtitle} list-unstyled`}>
                    <li>
                        <a className={styles['productname']} href="">
                        小提琴演奏初階個別課
                        </a>
                    </li>
                    <li>
                        <a className={styles['teachername']} href="">
                        伍俊彥 教師
                        </a>
                    </li>
                    <li className={styles['lessontime']}>18:00~20:00, 2024/11/4</li>
                    </ul>
                    <ul className={`${styles['productcard-function']} list-unstyled`}>
                    <li className={styles['productprice']}>$1800</li>
                    <div className={styles['productcardicons']}>
                        <a href="">
                        <img src="/icons/icon-cart.svg" alt="購物車" />
                        </a>
                        <a href="">
                        <img src="/icons/icon-x.svg" alt="刪除" />
                        </a>
                    </div>
                    </ul>
                </div>
                </div>

    </>
  )
}