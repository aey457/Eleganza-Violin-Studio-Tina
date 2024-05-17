import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@/hooks/use-auth' // 確保路徑正確
import { useAppContext } from '@/context/AppContext' // 確保路徑正確
import useAlert from '@/hooks/use-alert' // 確保路徑正確
import LoginForm from '@/component/users/form/login' // 确保路径正确
import styles from './rightcolumn.module.scss'

export default function CourseDetailRight({ course }) {
  const { auth } = useAuth() // 獲取用戶認證狀態
  const { dispatch } = useAppContext() // 獲取全局狀態
  const { success, error } = useAlert() // 使用自定義的提示函數
  const [showOffcanvas, setShowOffcanvas] = useState(false); // 控制显示登录窗口
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); // 控制显示请先登录提示

  const handleAddToCart = async () => {
    if (!auth.isLoggedIn) {
      setShowLoginPrompt(true); // 显示请先登录提示
      return
    }

    try {
      const response = await axios.post('http://localhost:3005/api/cart/add', {
        user_id: auth.userData.id, // 使用當前登錄用戶的ID
        course_id: course.id,
      })

      if (response.data.status === 'success') {
        success('課程已加入購物車')
        dispatch({ type: 'ADD_TO_CART', payload: course })

        // 更新會員中心的我的課程
        const userResponse = await axios.post(
          'http://localhost:3005/api/user/courses/add',
          {
            user_id: auth.userData.id, // 使用當前登錄用戶的ID
            course_id: course.id,
          },
        )

        if (userResponse.data.status === 'success') {
          dispatch({ type: 'ADD_USER_COURSE', payload: course })
        } else {
          error(userResponse.data.message)
        }
      } else {
        error(response.data.message)
      }
    } catch (error) {
      console.error('加入購物車錯誤:', error)
      error('無法加入購物車')
    }
  }

  const handleLoginSuccess = async () => {
    setShowOffcanvas(false); // 隐藏登录窗口
    setShowLoginPrompt(false); // 隐藏请先登录提示
  };

  const handleConfirmLogin = () => {
    setShowLoginPrompt(false); // 隐藏请先登录提示
    setShowOffcanvas(true); // 显示登录窗口
  };

  return (
    <div className={styles['right-column']}>
      <div className={styles['course-details']}>
        <p>
          {course.course_style} / {course.teacher_name}老師
        </p>
        <h1>{course.course_name}</h1>
        <div className={styles['stars-container']}>
          <div className={styles['stars']}>
            {[...Array(4)].map((_, i) => (
              <img key={i} src="/icons/icon-star-solid.svg" alt="star" />
            ))}
            <img src="/icons/icon-star.svg" alt="star" />
          </div>
          <p>4.3(24)</p>
        </div>
        <h2>${course.course_price}</h2>
        <p>課程時間</p>
        <p>起止日期：2024-03-29 至 2024-05-17</p>
        <p>上課時間：19:00 ~ 21:00</p>
        <div className={styles['course-details-bottom']}>
          <div className={styles['like-icon']}>
            {/* <a href="#">
              <img src="/icons/icon-like.svg" alt="like" />
            </a> */}
          </div>
          <div className={styles['action-icons']}>
            <a href="#">
              <img src="/icons/icon-minus.svg" alt="minus" />
            </a>
            <button>1</button>
            <a href="#">
              <img src="/icons/icon-plus.svg" alt="plus" />
            </a>
          </div>
          <button
            className={styles['add-to-cart-button']}
            onClick={handleAddToCart}
          >
            加入購物車
          </button>
        </div>
      </div>
      {showLoginPrompt && (
        <div className={styles.overlaybg}>
          <div className={styles.popupwindow}>
            <p>請先登入</p>
            <button onClick={handleConfirmLogin}>確定</button>
          </div>
        </div>
      )}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setShowOffcanvas(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  )
}
