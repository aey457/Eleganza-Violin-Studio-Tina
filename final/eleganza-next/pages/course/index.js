// components/course/courseList.js
import React, { useState, useEffect } from 'react'
import Breadcrumb from '@/component/course/breadcrumb'
import Navbar from '@/component/course/navbar'
import Leftcolumn from '@/component/course/left-column'
import Rightcolumn from '@/component/course/right-column'
import styles from './course.module.scss'

export default function CourseList() {
  const [filters, setFilters] = useState({})
  const [sortOrder, setSortOrder] = useState('priceAsc')
  const [courses, setCourses] = useState([])

  const handleCourseFilter = (courseClassId) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      course_class_id: courseClassId,
    }))
  }

  const handleSortChange = (sortType) => {
    setSortOrder(sortType)
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }))
  }

  const handleSearchResults = (results) => {
    console.log('Search Results:', results) // 调试信息
    setCourses(results)
  }

  useEffect(() => {
    // 假设你有一个函数 fetchCourses 来获取课程数据
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses')
        const data = await response.json()
        console.log('Fetched Courses:', data.data.courses) // 调试信息
        setCourses(data.data.courses)
      } catch (error) {
        console.error('获取课程数据时出错:', error)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div>
      <Breadcrumb />
      <Navbar
        onCourseFilter={handleCourseFilter}
        onSortChange={handleSortChange}
        onSearchResults={handleSearchResults}
      />
      <div className={styles['course-container']}>
        <Leftcolumn onFilterChange={handleFilterChange} />
        <Rightcolumn
          filters={filters}
          sortOrder={sortOrder}
          courses={courses}
        />
      </div>
    </div>
  )
}
