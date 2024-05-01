import React from 'react'
import styles from './breadcrumb.module.scss'

export default function Breadcrumb() {
  return (
    <>
  <div className={styles['tabs-desktop']} >
    <ul className={`list-unstyled`}>
      <li>
        <a href="">首頁</a> /
      </li>
      <li>
        <a href="">會員中心</a> /
      </li>
      <li className={styles['current']} >
        <a href="">我的帳號</a>
      </li>
    </ul>
  </div>
  <div className={styles['tabs-mobile']} >
    <ul className={`list-unstyled`}>
      <li>
        <a href="#">
          <img src="/icons/icon-chevron-left.svg" alt="" />
        </a>
        會員中心
      </li>
    </ul>
  </div>
</>

  )
}