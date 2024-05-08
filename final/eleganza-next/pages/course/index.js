import React from 'react'
import Breadcrumb from '@/component/course/breadcrumb'
import Navbar from '@/component/course/navbar'
import Leftcolumn from '@/component/course/left-column'
import Rightcolumn from '@/component/course/right-column'
import styles from './course.module.scss'

export default function CourseList() {


  
  return (
    <>
      <Breadcrumb />
      <Navbar />
      <div className={styles['course-container']}>
        <Leftcolumn />
        <Rightcolumn />
      </div>
    </>
  )
}
