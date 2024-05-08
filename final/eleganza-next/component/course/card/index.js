// Card.js
import React from 'react'
import styles from './card.module.scss'

export default function Card({ imageSrc, content }) {
  return (
    <div className="card-row">
      <div className={styles['card-body']}>
        <img src="/t3.jpg" className={styles['card-image']} alt="" />
        <div className={styles['card-content']}>
          <div className={styles['ul-container']}>
            <div className={styles['text-box']}>
              <p>古典/ 伍俊彥 教師</p>
              <p>個別課時間師生自行商議</p>
              <p>小提琴演奏初階個別課</p>
            </div>
            <div className={styles['text-box']}>
              <ul>
                <li>
                  擅長指導各種不同風格的曲目，包括古典、浪漫、現代等，並且致力於幫助學生發展出色的技巧和音樂表達能力，幫助他們在音樂道路上取得成功。
                </li>
                <li>教學年資：5至10年</li>
                <li>學費為單堂一小時費用。</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['card-footer']}>
          <div className={styles['card-icons']}>
            <img src="/icons/icon-like.svg" alt="Icon 1" />
            <img src="/icons/icon-cart.svg" alt="Icon 2" />
          </div>
          <div className={styles['card-price']}>
            <p>$1,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
