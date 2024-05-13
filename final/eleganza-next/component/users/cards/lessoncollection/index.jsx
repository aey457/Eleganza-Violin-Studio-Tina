import { useState, useEffect } from 'react'
import React from 'react'
import styles from './lessoncollection.module.scss'
import { useAuth } from '@/hooks/use-auth'

export default function LessonCollectionCard() {
  const [lessonDetails, setLessonDetails] = useState(null)
  const [lessons, setLessons] = useState([])
  const { auth } = useAuth()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        if (!accessToken) {
          // 如果 localStorage 中沒有 accessToken，則不執行後續操作
          return
        }
        const parseJwt = (token) => {
          const base64Payload = token.split('.')[1]
          const payload = Buffer.from(base64Payload, 'base64')
          return JSON.parse(payload.toString())
        }

        // 解析 JWT 並提取 userData
        const userData = parseJwt(accessToken)

        setLessonDetails(userData) // 更新使用者資料狀態
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }

    fetchUserData() // 執行取得使用者資料的函式
  }, [])

  // 與伺服器要求獲取資料的async函式
  const getLessons = async () => {
    const url = `http://localhost:3005/api/my-lessoncollection/lessoncollection/${auth.userData.id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    if (Array.isArray(data.collections)) {
      setLessons(data.collections)
    } else {
      console.error('Collections data is not an array:', data.collections)
    }
  }
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
                  <a className={styles['productname']} href="">
                    {v.course_name}
                  </a>
                </li>
                <li>
                  <a className={styles['teachername']} href="">
                    {v.course_teacher_name} 教師
                  </a>
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
                  <a className={styles['productname']} href="">
                    {v.course_name}
                  </a>
                </li>
                <li>
                  <a className={styles['teachername']} href="">
                    {v.course_teacher_name} 教師
                  </a>
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
  )
}
