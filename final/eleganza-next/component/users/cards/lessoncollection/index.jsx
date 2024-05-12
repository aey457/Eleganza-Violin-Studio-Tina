import { useState, useEffect } from 'react'
import React from 'react';
import styles from './lessoncollection.module.scss'

export default function LessonCollectionCard() {
    const [lessons, setLessons] = useState([])

    // 與伺服器要求獲取資料的async函式
  const getLessons = async () => {
    const url = 'http://localhost:3005/api/my-lessoncollection/lessoncollection/1';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
    if (Array.isArray(data.collections)) {
      setLessons(data.collections);
    } else {
      console.error('Collections data is not an array:', data.collections);
    }
  };
  // 樣式2: didMount階段只執行一次
  useEffect(() => {
    // 頁面初次渲染之後伺服器要求資料
    getLessons()
  }, [])

  return (
    <>
      {lessons.map((v, i) => (  
        <div key={v.user_id}>
          <div className={`${styles['productcard']} ${styles['desktop-only']}`}>
            <a href="">
              <img
                src="/images/course_images/2.Wu Junyan.jpg"
                alt=""
                className={styles['productcardimg']} 
              />
            </a>
            <div className={styles['product-word']}>
              <ul className={`${styles.productcardtitle} list-unstyled`}>
                <li className={styles['productbranding']}>
                  <a href="">2024/11/4</a>
                </li>
                <li>
                  <a className={styles['productname']} href="">{v.course_name}</a>
                </li>
                <li>
                  <a className={styles['teachername']} href="">{v.course_teacher_name} 教師</a>
                </li>
                <li className={styles['lessontime']}>18:00~20:00</li>
              </ul>
              <ul className={`${styles['productcard-function']} list-unstyled`}>
                <li className={styles['productprice']}>{v.course_price}</li>
                <div className={styles['productcardicons']}>
                  <a href="">
                    <img src="/icons/icon-cart.svg" alt="購物車" />
                  </a>
                  <a href="">
                    <img src="/icons/icon-liked.svg" alt="收藏" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className={`${styles['productcard']} ${styles['mobile-only']}`}>
            <img
              src="/images/course_images/2.Wu Junyan.jpg"
              alt=""
              className={styles['productcardimg']}
            />
            <div className={styles['product-word']}>
              <ul className={`${styles.productcardtitle} list-unstyled`}>
                <li>
                  <a className={styles['productname']} href="">{v.course_name}</a>
                </li>
                <li>
                  <a className={styles['teachername']} href="">{v.course_teacher_name} 教師</a>
                </li>
                <li className={styles['lessontime']}>18:00~20:00, 2024/11/4</li>
              </ul>
              <ul className={`${styles['productcard-function']} list-unstyled`}>
                <li className={styles['productprice']}>{v.course_price}</li>
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
        </div>
      ))}
    </>
  );
    
  }