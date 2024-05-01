import React from 'react'
import styles from './header.module.scss'

export default function Header() {
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
              <a href="">關於阿爾扎</a>
            </li>
            <li className={styles.link}>
              <a href="">商品總覽</a>
            </li>
            <li className={styles.link}>
              <a href="">精選課程</a>
            </li>
            <li className={styles.link}>
              <a href="">師資陣容</a>
            </li>
            <li className={styles.link}>
              <a href="">弦樂專欄</a>
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
            <a href="">
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
