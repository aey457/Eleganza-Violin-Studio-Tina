import React from 'react'
import styles from './sidenav.module.scss'

export default function SideNav() {
  return (
    <>
      <div className={styles['sidenav-desktop']}>
        <ul className={`list-unstyled ${styles['accountname']}`} >
          <li className="">
            <div>
              <p>Fanny456</p>
            </div>
          </li>
        </ul>
        <hr />
        <ul className={`list-unstyled ${styles['accountform']}`}>
          <li>
            <a className={styles['sidenavselected']} href="">
              我的帳號
            </a>
          </li>
          <li>
            <a href="">我的課程</a>
          </li>
          <li>
            <a href="">收藏內容</a>
          </li>
          <li>
            <a href="">歷史訂單</a>
          </li>
          <li>
            <a className={styles['sidenavlogout']} href="">
              登出
            </a>
          </li>
        </ul>
      </div>
      <div className={styles['sidenav-mobile']}>
        <ul className={`list-unstyled ${styles['accountname']}`}>
          <li className="">
            <div
              style={{
                marginBottom: 20,
                width: "100%",
                borderBottom: "0.5px solid var(--color-primary-medium)"
              }}
            >
              <p>Fanny456</p>
            </div>
          </li>
        </ul>
        <ul className={`list-unstyled ${styles['accountform-mobile']}`}>
          <li>
            <a className={styles['sidenavselected']} href="#">
              我的帳號
              <img src="./icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              我的課程
              <img src="./icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              收藏內容
              <img src="./icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              歷史訂單
              <img src="./icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a className={styles['sidenavlogout']} href="">
              登出
            </a>
          </li>
        </ul>
      </div>
</>

  )
}