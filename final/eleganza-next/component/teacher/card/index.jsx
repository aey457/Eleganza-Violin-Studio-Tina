import React, { useState } from 'react'
import styles from './card.module.scss'

export default function Card() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleIconClick = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <>
      <div className={styles['card-column']}>
        <div className={styles['card-row']}>
          <div className={styles['card-body']}>
            <div className={styles['image-container']}>
              <img src="/t3.jpg" className={styles['card-image']} alt="" />
            </div>
            <div className={styles['card-header']}>
              <div className={styles['text-box']}>
                <h4>林汶希</h4>
              </div>
              <div className={styles['text-box']}>
                <ul>
                  <li>倫敦聖三一音樂學院 小提琴演奏文憑</li>
                  <li>曾獲比利時青年音樂節 弦樂小組 二等獎(團體)</li>
                  <li>教學年資：7年</li>
                  <li>
                    任職過私人學生 (小提琴導師)、 禮頓琴行
                    (小提琴導師)、樂藝教育琴行 (小提琴導師)
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['card-footer']}>
              <div className={styles['card-icons']} onClick={handleIconClick}>
                <img
                  src="/icons/icon-chevron-down.svg"
                  alt=""
                  className="expand-icon"
                />
              </div>
            </div>
            <div
              className={`${styles['card-content']} ${isExpanded ? styles['expanded'] : ''}`}
            >
              <div className={styles['content-text']}>
                <div className={styles['three-column-layout']}>
                  <div className={styles.column}>
                    <p>教師簡介</p>
                    <p>
                      5歲開始學習小提琴，啟蒙於曾道名老師並曾師事Eugène Ysaÿe,
                      Isaac
                      Stern等知名小提琴家習琴。伍老師擅長指導各種不同風格的曲目，包括古典、浪漫、現代等，並且致力於幫助學生發展出色的技巧和音樂表達能力，幫助他們在音樂道路上取得成功，如國內音樂比賽AB組的常勝軍、非科班考進音樂班、音樂系。
                    </p>
                  </div>
                  <div className={styles.column}>
                    <p>學經歷</p>
                    <p>倫敦聖三一音樂學院最高演奏文憑</p>
                    <p>倫敦聖三一音樂學院最高演奏文憑</p>
                    <p>倫敦聖三一音樂學院最高演奏文憑</p>
                  </div>
                  <div className={styles.column}>
                    <p>教授課程</p>
                    <p>小提琴演奏初階個別課</p>
                    <p>小提琴演奏初階個別課</p>
                    <p>小提琴演奏初階個別課</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles['card-row']} ${
            isExpanded ? styles['expanded-row'] : ''
          }`}
        ></div>
      </div>
    </>
  )
}
