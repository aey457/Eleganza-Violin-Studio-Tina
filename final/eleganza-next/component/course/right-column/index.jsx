import React, { useState, useEffect } from 'react';
import Card from '../card';
import Pagination from '../pagination';
import courseData from '../../../data/coursesData.json';
import teachersData from '../../../data/teachersData.json';
import { useRouter } from 'next/router';
import styles from './right-column.module.scss';
import axios from 'axios';
import { useAuth } from '@/hooks/use-auth'; // 确保路径正确
import { useAppContext } from '@/context/AppContext'; // 确保路径正确
import useAlert from '@/hooks/use-alert'; // 确保路径正确
import LoginForm from '@/component/users/form/login'; // 确保路径正确

export default function Rightcolumn({ filters, sortOrder }) {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // 控制显示登录窗口
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); // 控制显示请先登录提示
  const [pendingCourseId, setPendingCourseId] = useState(null); // 存储未登录前的课程ID
  const coursesPerPage = 6;
  const router = useRouter();
  const { auth, login } = useAuth(); // 获取用户认证状态和登录函数
  const { dispatch } = useAppContext(); // 获取全局状态
  const { success, error } = useAlert(); // 使用自定义的提示函数

  useEffect(() => {
    const teacherMap = teachersData.reduce((map, teacher) => {
      map[teacher.teacher_id] = {
        t_years: teacher.t_years,
        t_name: teacher.t_name,
      };
      return map;
    }, {});

    const enhancedCourses = courseData.map((course) => {
      const teacher = teacherMap[course.teacher_id];
      return {
        ...course,
        teacher_name: teacher ? teacher.t_name : '未指定',
        t_years: teacher ? teacher.t_years : null,
      };
    });

    let filteredCourses = enhancedCourses.filter((course) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (key === 't_years') {
          return value.includes(String(course.t_years));
        }
        if (key === 'course_style') {
          return value.includes(course.course_style);
        }
        return course[key] == value;
      });
    });

    if (sortOrder === 'priceAsc') {
      filteredCourses.sort((a, b) => a.course_price - b.course_price);
    } else if (sortOrder === 'priceDesc') {
      filteredCourses.sort((a, b) => b.course_price - a.course_price);
    }

    setTotalCourses(filteredCourses.length);
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    setCourses(currentCourses);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filters, sortOrder, currentPage]);

  const handleCardClick = (courseId) => {
    router.push(`/course/${courseId}`);
  };

  const handleAddToCart = async (courseId) => {
    if (!auth.isLoggedIn) {
      setPendingCourseId(courseId); // 存储未登录前的课程ID
      setShowLoginPrompt(true); // 显示请先登录提示
      return;
    }

    try {
      const response = await axios.post('http://localhost:3005/api/cart/add', {
        user_id: auth.userData.id, // 使用当前登录用户的ID
        course_id: courseId,
      });

      if (response.data.status === 'success') {
        success('課程已加入購物車');
        const course = courses.find((course) => course.course_id === courseId);
        dispatch({ type: 'ADD_TO_CART', payload: course });

        // 更新会员中心的我的课程
        const userResponse = await axios.post(
          'http://localhost:3005/api/user/courses/add',
          {
            user_id: auth.userData.id, // 使用当前登录用户的ID
            course_id: courseId,
          },
        );

        if (userResponse.data.status === 'success') {
          dispatch({ type: 'ADD_USER_COURSE', payload: course });
        } else {
          error(userResponse.data.message);
        }
      } else {
        error(response.data.message);
      }
    } catch (err) {
      console.error('加入購物車錯誤:', err);
      error('無法加入購物車');
    }
  };

  const handleLoginSuccess = async () => {
    setShowOffcanvas(false); // 隐藏登录窗口
    if (pendingCourseId) {
      // 成功登录后重新执行添加购物车操作
      await handleAddToCart(pendingCourseId);
      setPendingCourseId(null); // 清除暂存的课程ID
    }
  };

  const handleConfirmLogin = () => {
    setShowLoginPrompt(false); // 隐藏请先登录提示
    setShowOffcanvas(true); // 显示登录窗口
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles['right-column']}>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <Card
            key={index}
            course={course}
            onClick={() => handleCardClick(course.course_id)}
            onAddToCart={() => handleAddToCart(course.course_id)}
          />
        ))
      ) : (
        <p>沒有符合條件的課程</p>
      )}
      {totalCourses > 0 && (
        <Pagination
          currentPage={currentPage}
          totalCourses={totalCourses}
          coursesPerPage={coursesPerPage}
          onChange={handlePageChange}
        />
      )}
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
  );
}
