import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './mobile-cardlayout.module.css'
import emptyStyles from '../empty/empty.module.css'
import LessonCollectionCard from '@/component/users/cards/lessoncollection/'
import UserLayout from '@/component/users/user-layout'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'

export default function LessonCollection() {
  const [user, setUser] = useState({})
  const router = useRouter()
  const { auth } = useAuth()
  const [hasLessonCollection, setHasLessonCollection] = useState(false)
  const [userDataLoaded, setUserDataLoaded] = useState(false)

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
        setUser(userData) // 更新使用者資料狀態
        console.log(userData)

        // 檢查是否有課程收藏
        const lessonCollectionRes = await fetch(
          `http://localhost:3005/api/my-lessoncollection/lessoncollection/${userData.id}`,
        )
        const lessonCollectionData = await lessonCollectionRes.json()
        setHasLessonCollection(
          Array.isArray(lessonCollectionData) &&
            lessonCollectionData.length > 0,
        )
        setUserDataLoaded(true) // 設置為 true，表示使用者資料已加載
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }

    fetchUserData() // 執行取得使用者資料的函式
  }, [])

  return (
    <>
      {userDataLoaded ? (
        <>
          <div className={styles['mainarea-desktop-collection']}>
            <LessonCollectionCard />
          </div>
          <div className={styles['lesson-mobile']}>
            <div className={styles['btn-mobile']}>
              <div className={styles['sbtn']}>
                <Link href="/users/mobile-cardlayout/product-collection">
                  商品收藏
                </Link>
              </div>
              <div className={styles['sbtn-selected']}>
                <Link href="/users/mobile-cardlayout/lesson-collection">
                  課程收藏
                </Link>
              </div>
            </div>
            <LessonCollectionCard />
          </div>
          {hasLessonCollection ? (
            <>
              <div className={emptyStyles['mainarea-desktop-collection']}>
                <div className={emptyStyles['emptycontent']}>
                  {' '}
                  {/* 使用空白頁面的樣式 */}
                  <p>您還未收藏任何課程</p>
                </div>
                <div className={emptyStyles['sbtn']}>
                  <Link href="/course">前往購物</Link>
                </div>
              </div>
              <div className={emptyStyles['lesson-mobile']}>
                <div className={emptyStyles['emptycontent']}>
                  {' '}
                  {/* 使用空白頁面的樣式 */}
                  <p>您還未收藏任何商課程</p>
                </div>
                <div className={emptyStyles['sbtn']}>
                  <Link href="/course">前往購物</Link>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  )
}

LessonCollection.getLayout = function (page) {
  return <UserLayout currentPage="收藏內容">{page}</UserLayout>
}
