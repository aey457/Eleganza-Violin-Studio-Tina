import { useState, useEffect } from 'react'
import React from 'react'
import styles from './lessoncard.module.scss'
import { useAuth } from '@/hooks/use-auth'

export default function LessonCard() {
  const [lessonDetails, setLessonDetails] = useState(null)
  const { auth } = useAuth()
  const [lessons, setLessons] = useState([])

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

  const getLessons = async () => {
    const url = `http://localhost:3005/api/my-lessoncollection/lessonorder/${auth.userData.id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    if (Array.isArray(data.corders)) {
      setLessons(data.corders)
    } else {
      console.error('Collections data is not an array:', data.corders)
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
          <div className={styles['lessoncard']}>
            <img
              src="/images/course_images/movie_soundtrack_class.jpg"
              alt=""
              className={styles['lessoncardimg']}
            />
            <div className={styles['lessoncard-word']}>
              <ul className={`${styles.lessoncardtitle} list-unstyled`}>
                <li className={styles['lessondate']}>2024/11/4</li>
                <li>
                  <a className={styles['lessonname']} href="">
                    {v.course_name}
                  </a>
                </li>
                <li>
                  <a className={styles['teachername']} href="">
                    {v.course_teacher_name} 教師
                  </a>
                </li>
              </ul>
              <ul className={`list-unstyled`}>
                <li className={styles['lessoncardtime']}>18:00~20:00</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
