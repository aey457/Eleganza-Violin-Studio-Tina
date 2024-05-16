import React, { useState, useEffect } from 'react'
import Card from '../card'
import Pagination from '../pagination'
import courseData from '../../../data/coursesData.json'
import teachersData from '../../../data/teachersData.json'
import { useRouter } from 'next/router'
import styles from './right-column.module.scss'

export default function Rightcolumn({ filters, sortOrder }) {
  const [courses, setCourses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCourses, setTotalCourses] = useState(0)
  const coursesPerPage = 6
  const router = useRouter()

  useEffect(() => {
    const teacherMap = teachersData.reduce((map, teacher) => {
      map[teacher.teacher_id] = {
        t_years: teacher.t_years,
        t_name: teacher.t_name,
      }
      return map
    }, {})

    const enhancedCourses = courseData.map((course) => {
      const teacher = teacherMap[course.teacher_id]
      return {
        ...course,
        teacher_name: teacher ? teacher.t_name : '未指定',
        t_years: teacher ? teacher.t_years : null,
      }
    })

    let filteredCourses = enhancedCourses.filter((course) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true
        if (key === 't_years') {
          return value.includes(String(course.t_years))
        }
        if (key === 'course_style') {
          return value.includes(course.course_style)
        }
        return course[key] == value
      })
    })

    if (sortOrder === 'priceAsc') {
      filteredCourses.sort((a, b) => a.course_price - b.course_price)
    } else if (sortOrder === 'priceDesc') {
      filteredCourses.sort((a, b) => b.course_price - a.course_price)
    }

    setTotalCourses(filteredCourses.length)
    const indexOfLastCourse = currentPage * coursesPerPage
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

    setCourses(currentCourses)
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
    if (currentPage > totalPages) {
      setCurrentPage(1)
    }
  }, [filters, sortOrder, currentPage])

  const handleCardClick = (courseId) => {
    router.push(`/course/${courseId}`)
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles['right-column']}>
      {courses.map((course, index) => (
        <Card
          key={index}
          course={course}
          onClick={() => handleCardClick(course.course_id)}
        >
          <p>開課日期：{course.start_date}</p>
          <p>開課時間：{course.start_time}</p>
        </Card>
      ))}
      {totalCourses > 0 && (
        <Pagination
          currentPage={currentPage}
          totalCourses={totalCourses}
          coursesPerPage={coursesPerPage}
          onChange={handlePageChange}
        />
      )}
    </div>
  )
}
