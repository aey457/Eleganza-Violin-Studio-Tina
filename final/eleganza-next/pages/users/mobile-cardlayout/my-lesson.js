import { useState, useEffect } from 'react'
import React from 'react'
import Head from 'next/head'
import styles from './mobile-cardlayout.module.css'
import LessonCard from '@/component/users/cards/lessoncard'
import UserLayout from '@/component/users/user-layout'
import { useAuth } from '@/hooks/use-auth'

export default function MyLesson() {
  const { auth } = useAuth()

  return (
    <>
      <div className={styles['mainarea-desktop-mylesson']}>
        <LessonCard />
      </div>
      <div className={styles['lesson-mobile']}>
        <div className={styles['btn-mobile']}>
          <div className={styles['sbtn-selected']}>
            <a href="">全部課程</a>
          </div>
          <div className={styles['sbtn']}>
            <a href="">尚未開始</a>
          </div>
          <div className={styles['sbtn']}>
            <a href="">課程結束</a>
          </div>
        </div>
        <LessonCard />
      </div>
    </>
  )
}

MyLesson.getLayout = function (page) {
  return <UserLayout currentPage="我的課程">{page}</UserLayout>
}
