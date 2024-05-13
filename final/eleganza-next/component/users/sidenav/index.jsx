import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './sidenav.module.scss'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'

export default function SideNav() {
  const { logout } = useAuth()
  const [currentPage, setCurrentPage] = useState('我的帳號')
  const [currentSubPage, setCurrentSubPage] = useState('商品收藏')
  const [isSideNavVisible, setIsSideNavVisible] = useState(false)
  const [user, setUser] = useState({})
  const router = useRouter()
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

        setUser(userData) // 更新使用者資料狀態
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }

    fetchUserData() // 執行取得使用者資料的函式
  }, [])

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible)
  }

  return (
    <>
      <div className={styles['sidenav-desktop']}>
        <ul className={`list-unstyled ${styles['accountname']}`}>
          <li className="">
            <div>
              <p>{user.user_account}</p>
            </div>
          </li>
        </ul>
        <hr />
        <ul className={`list-unstyled ${styles['accountform']}`}>
          <li>
            <Link
              href="/users/account-center/account-center?userId="
              onClick={() => setCurrentPage('我的帳號')}
              className={
                currentPage === '我的帳號' ? styles['sidenavselected'] : ''
              }
            >
              我的帳號
            </Link>
          </li>
          <li>
            <Link
              href="/users/mobile-cardlayout/my-lesson"
              onClick={() => setCurrentPage('我的課程')}
              className={
                currentPage === '我的課程' ? styles['sidenavselected'] : ''
              }
            >
              我的課程
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => setCurrentPage('收藏內容')}
              className={
                currentPage === '收藏內容' ? styles['sidenavselected'] : ''
              }
            >
              收藏內容
            </Link>
            <ul className={styles['sidenavsub-desktop']}>
              <li
                className={
                  currentSubPage === '商品收藏' ? styles['current'] : ''
                }
              >
                <Link
                  href="/users/mobile-cardlayout/product-collection"
                  onClick={() => setCurrentSubPage('商品收藏')}
                >
                  商品收藏
                </Link>
              </li>
              <li
                className={
                  currentSubPage === '課程收藏' ? styles['current'] : ''
                }
              >
                <Link
                  href="/users/mobile-cardlayout/lesson-collection"
                  onClick={() => setCurrentSubPage('課程收藏')}
                >
                  課程收藏
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/users/order-history/order-history"
              onClick={() => setCurrentPage('歷史訂單')}
              className={
                currentPage === '歷史訂單' ? styles['sidenavselected'] : ''
              }
            >
              歷史訂單
            </Link>
          </li>
          <li>
            <Link className={styles['sidenavlogout']} onClick={logout} href="">
              登出
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles['sidenav-mobile']} ${isSideNavVisible ? styles['show'] : styles['hide']}`}
      >
        <ul className={`list-unstyled ${styles['accountname']}`}>
          <li className="">
            <div
              style={{
                marginBottom: 20,
                width: '100%',
                borderBottom: '0.5px solid var(--color-primary-medium)',
              }}
            >
              <p>{user.user_account}</p>
            </div>
          </li>
        </ul>
        <ul className={`list-unstyled ${styles['accountform-mobile']}`}>
          <li>
            <Link
              href="/users/account-center/account-center?userId="
              onClick={() => setCurrentPage('我的帳號')}
              className={
                currentPage === '我的帳號' ? styles['sidenavselected'] : ''
              }
            >
              我的帳號
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link
              href="/users/mobile-cardlayout/my-lesson"
              onClick={() => setCurrentPage('我的課程')}
              className={
                currentPage === '我的課程' ? styles['sidenavselected'] : ''
              }
            >
              我的課程
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => setCurrentPage('收藏內容')}
              className={
                currentPage === '收藏內容' ? styles['sidenavselected'] : ''
              }
            >
              收藏內容
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </Link>
            <ul className={styles['sidenavsub-mobile']}>
              <li
                className={
                  currentSubPage === '商品收藏' ? styles['current'] : ''
                }
              >
                <Link
                  href="/users/mobile-cardlayout/product-collection"
                  onClick={() => setCurrentSubPage('商品收藏')}
                >
                  商品收藏
                </Link>
              </li>
              <li
                className={
                  currentSubPage === '課程收藏' ? styles['current'] : ''
                }
              >
                <Link
                  href="/users/mobile-cardlayout/lesson-collection"
                  onClick={() => setCurrentSubPage('課程收藏')}
                >
                  課程收藏
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/users/order-history/order-history"
              onClick={() => setCurrentPage('歷史訂單')}
              className={
                currentPage === '歷史訂單' ? styles['sidenavselected'] : ''
              }
            >
              歷史訂單
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link className={styles['sidenavlogout']} onClick={logout} href="">
              登出
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
