import React from 'react'
import styles from './leftcolumn.module.scss'

export default function CourseDetailLeft() {
  return (
    <>
      <div className="left-column col-6">
        <img src="/ZhangJunwen.jpg" style={{ width: 600 }} alt="" />
        <div className={styles['grid-item-left-description']}>
          <h3>課程簡介</h3>
          <p>
            八級以上文憑檢定準備課程 共8週
            16小時。彭智軒老師有超過10年帶學生考取英國皇家小提琴五級水平以上的經驗。上課採取個別進度檢討與團體考試技巧磨鍊並行的方式，讓學員在考試前有充分的時間熟悉考試、安心通過檢定。
          </p>
        </div>
        <div className={styles['grid-item-left-button']}>
          <h3>商品細項</h3>
          <button style={{ width: 161 }}>點我下載</button>
        </div>
      </div>
    </>
  )
}
