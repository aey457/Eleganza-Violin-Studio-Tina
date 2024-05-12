
import React, { useState, useEffect } from 'react';
import styles from './sidenav.module.scss';
import { useRouter } from 'next/router';

export default function SideNav() {
  const [currentPage, setCurrentPage] = useState('我的帳號');
  const [currentSubPage, setCurrentSubPage] = useState('商品收藏');
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  const parseJwt = (token) => {
    const base64Payload = token.split('.')[1]
    const payload = Buffer.from(base64Payload, 'base64')
    return JSON.parse(payload.toString())
}

  useEffect(() => {
    const { userId } = router.query;
    if (userId) {
      fetch(`http://localhost:3005/api/home-myaccount/${userId}`)
        .then(response => response.json())
        .then(data => {
          setUser(data.userDetails);
        })
        .catch(error => console.error('Error fetching user details:', error));
    }
  }, [router.query.userId]);

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3005/home-myaccount/logout', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const data = await res.json();

    if (data.status === 'success') {
      alert('登出成功');
    } else {
      alert(data.message);
    }
  };

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <>
      <div className={styles['sidenav-desktop']}>
        <ul className={`list-unstyled ${styles['accountname']}`} >
          <li className="">
            <div>
              <p>{user.user_account}</p>
            </div>
          </li>
        </ul>
        <hr />
        <ul className={`list-unstyled ${styles['accountform']}`}>
          <li>
            <a href="/users/account-center/account-center?userId="
              onClick={() => setCurrentPage('我的帳號')}
              className={currentPage === '我的帳號' ? styles['sidenavselected'] : ''}>
              我的帳號
            </a>
          </li>
          <li>
            <a href="/users/mobile-cardlayout/my-lesson"
              onClick={() => setCurrentPage('我的課程')}
              className={currentPage === '我的課程' ? styles['sidenavselected'] : ''}>我的課程</a>
          </li>
          <li>
            <a href="#"
              onClick={() => setCurrentPage('收藏內容')}
              className={currentPage === '收藏內容' ? styles['sidenavselected'] : ''}>收藏內容</a>
              <ul className= {styles['sidenavsub-desktop']} >
                <li className={currentSubPage === '商品收藏' ?  styles['current']: ''}>
                  <a href="/users/mobile-cardlayout/product-collection"
                    onClick={() => setCurrentSubPage('商品收藏')}
                  >商品收藏</a>
                </li>
                <li className={currentSubPage === '課程收藏' ?  styles['current']: ''}>
                  <a href="/users/mobile-cardlayout/lesson-collection"
                    onClick={() => setCurrentSubPage('課程收藏')}
                  >課程收藏</a>
                </li>
              </ul>
          </li>
          <li>
            <a href="/users/order-history/order-history"
              onClick={() => setCurrentPage('歷史訂單')}
              className={currentPage === '歷史訂單' ? styles['sidenavselected'] : ''}>歷史訂單</a>
          </li>
          <li>
            <a className={styles['sidenavlogout']} onClick={handleLogout} href="">
              登出
            </a>
          </li>
        </ul>
      </div>
      <div className={`${styles['sidenav-mobile']} ${isSideNavVisible ? styles['show'] : styles['hide']}`}>
        <ul className={`list-unstyled ${styles['accountname']}`}>
          <li className="">
            <div
              style={{
                marginBottom: 20,
                width: "100%",
                borderBottom: "0.5px solid var(--color-primary-medium)"
              }}
            >
              <p>{user.user_account}</p>
            </div>
          </li>
        </ul>
        <ul className={`list-unstyled ${styles['accountform-mobile']}`}>
          <li>
            <a href="/users/account-center/account-center?userId="
              onClick={() => setCurrentPage('我的帳號')}
              className={currentPage === '我的帳號' ? styles['sidenavselected'] : ''}>
              我的帳號
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="/users/mobile-cardlayout/my-lesson"
              onClick={() => setCurrentPage('我的課程')}
              className={currentPage === '我的課程' ? styles['sidenavselected'] : ''}>
              我的課程
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#"
              onClick={() => setCurrentPage('收藏內容')}
              className={currentPage === '收藏內容' ? styles['sidenavselected'] : ''}>
              收藏內容
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </a>
            <ul className= {styles['sidenavsub-mobile']} >
                <li className={currentSubPage === '商品收藏' ?  styles['current']: ''}>
                  <a href="/users/mobile-cardlayout/product-collection"
                    onClick={() => setCurrentSubPage('商品收藏')}
                  >商品收藏</a>
                </li>
                <li className={currentSubPage === '課程收藏' ?  styles['current']: ''}>
                  <a href="/users/mobile-cardlayout/lesson-collection"
                    onClick={() => setCurrentSubPage('課程收藏')}
                  >課程收藏</a>
                </li>
              </ul>
          </li>
          <li>
            <a href="/users/order-history/order-history"
              onClick={() => setCurrentPage('歷史訂單')}
              className={currentPage === '歷史訂單' ? styles['sidenavselected'] : ''}>
              歷史訂單
              <img src="/icons/icon-chevron-right.svg" alt="" />
            </a>
          </li>
          <li>
            <a className={styles['sidenavlogout']} onClick={handleLogout} href="">
              登出
            </a>
          </li>
        </ul>
      </div>
</>

  )
}