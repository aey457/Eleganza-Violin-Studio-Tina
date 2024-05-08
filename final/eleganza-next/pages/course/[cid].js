import {useState, useEffect} from 'react'
import Breadcrumb from '@/component/course/breadcrumb'
import Navbar from '@/component/course/navbar'
import CourseDetailRight from '@/component/course/course_detail/right-column'
import CourseDetailLeft from '@/component/course/course_detail/left-column'
import Comment from '@/component/course/course_detail/comment'
import styles from './detail.module.scss'


export default function CourseDetail() {
  const [course, setCourse] = useState({
    
  })
  
  
  return (
    <>
      <Breadcrumb />
      <Navbar />
      <div className={styles['course-details-container']}>
        <CourseDetailLeft />
        <CourseDetailRight />
      </div>
      <Comment />
    </>
  )
}
