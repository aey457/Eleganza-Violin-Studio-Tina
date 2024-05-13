import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';
// import { useAuth } from '@/hooks/use-auth';

// const { auth } = useAuth();

export default function Header() {
  const router = useRouter();
  // 登入狀態，true表示已登录，false表示未登录
  const isLoggedIn = true;

  // 
  const loginLink = isLoggedIn ? '/users/account-center/account-center' : '/users/user-form/login';

  return (
    <>
      <header>
        <div className={`${styles['header-container']} fixed-top`}>
          <div className={styles.logo}>
            <a href="">ELEGANZA</a>
          </div>
          <ul
            className={`d-flex justify-content-between align-content-center list-unstyled m-0`}
          >
            <li className={styles.link}>
              <a href="/">關於阿爾扎</a>
            </li>
            <li className={styles.link}>
              <Link href="/products">商品總覽</Link>
            </li>
            <li className={styles.link}>
              <Link href="/course">精選課程</Link>
            </li>
            <li className={styles.link}>
              <Link href="/teacher">師資陣容</Link>
            </li>
            <li className={styles.link}>
              <Link href="/article">弦樂專欄</Link>
            </li>
          </ul>
          <div
            className={
              styles['header-icons'] +
              ' d-flex align-items-center justify-content-between'
            }
          >
            <a href="">
              <img className={styles.cart} src="/icons/icon-cart-white.svg" />
            </a>
            
            <a href={loginLink}>
              {/* 如果偵測到登入狀態就是account-center */}
              <img
                className={styles.account}
                src="/icons/icon-user-white.svg"
              />
            </a>
            <a href="">
              <img className={styles.menu} src="/icons/icon-menu-white.svg" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
