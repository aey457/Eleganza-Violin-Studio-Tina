import { useRouter } from 'next/router'
import Breadcrumb from '@/component/course/breadcrumb'
// import Navbar from '@/component/course/navbar'
import CourseDetailRight from '@/component/course/course_detail/right-column'
import CourseDetailLeft from '@/component/course/course_detail/left-column'
import styles from './detail.module.scss'
import axios from 'axios'

// 用於查找特定課程
export async function getServerSideProps(context) {
  const { id } = context.params

  try {
    const response = await axios.get(`http://localhost:3005/api/courses/${id}`)
    const courseData = response.data

    if (!courseData || !courseData.data || !courseData.data.course) {
      console.error('未找到具體課程數據')
      return { props: { course: null } }
    }
    const course = courseData.data.course

    return {
      props: {
        course, // 將課程作為 prop 傳遞
      },
    }
  } catch (error) {
    console.error('取得數據時出錯:', error)
    return { props: { course: null } }
  }
}

export default function CourseDetailPage({ course }) {
  const router = useRouter()

  if (!course) {
    return <p>課程未找到</p>
  }

  return (
    <>
      <Breadcrumb />
      {/* <Navbar showSearch={false} showSort={false} /> */}
      <button
        className={styles['back-button']}
        onClick={() => router.push('/course')}
      >
        <img src="/icons/icon-chevron-left.svg" alt="返回" />
        返回
      </button>
      <div className={styles['course-details-container']}>
        <CourseDetailLeft course={course} />
        <CourseDetailRight course={course} />
      </div>
    </>
  )
}
