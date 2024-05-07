import React from 'react'
import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">全部課程</a>
          </li>
          <li>
            <a href="#">初階個別課</a>
          </li>
          <li>
            <a href="#">中階個別課</a>
          </li>
          <li>
            <a href="#">高階個別課</a>
          </li>
          <li>
            <a href="#">團體班</a>
          </li>
          <li>
            <a href="#">大師班</a>
          </li>
        </ul>
        <div
          className={`${styles['navbar-icons']} d-flex align-items-center justify-content-between`}
        >
          <a href="">
            <img className={styles.search} src="/icons/icon-search.svg" />
          </a>
          <div className={styles['navbar-icons2']}>
            <a href="">排序</a>
            <a href="">
              <img
                className={styles['chevron-down']}
                src="/icons/icon-chevron-down.svg"
              />
            </a>
          </div>
        </div>
      </nav>
      <hr></hr>
      {/* <div className={styles['navbar-divider']} /> */}
      <div className={styles['filter-container']}>
        <a className={styles.Filter} href="#">
          篩選條件
          <img src="/icons/icon-chevron-down.svg" alt="" />
        </a>
        <a className={styles.sort} href="">
          sort by
          <img src="/icons/icon-chevron-down.svg" alt="" />
        </a>
      </div>
    </>
  )
}
