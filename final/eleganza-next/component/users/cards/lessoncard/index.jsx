import React from 'react'
import styles from './lessoncard.module.scss'

export default function LessonCard() {
  return (
    <>
    <div className={styles['lessoncard']}>
        <img
            src="/images/teacher_images/WuJunyan.jpg"
            alt=""
            className={styles['lessoncardimg']}
        />
        <div className={styles['lessoncard-word']} >
            <ul className={`${styles.lessoncardtitle} list-unstyled`}>
            <li className={styles['lessondate']} >2024/11/4</li>
            <li>
                <a className={styles['lessonname']} href="">
                小提琴演奏初階個別課
                </a>
            </li>
            <li>
                <a className={styles['teachername']} href="">
                伍俊彥 教師
                </a>
            </li>
            </ul>
            <ul className={`list-unstyled`} >
            <li className={styles['lessoncardtime']} >18:00~20:00</li>
            </ul>
        </div>
        </div>
        </>

  )
}