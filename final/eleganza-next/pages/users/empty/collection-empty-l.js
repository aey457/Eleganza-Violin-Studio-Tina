import React from 'react'
import Head from 'next/head'
import styles from './empty.module.css'
import UserLayout from '@/component/users/user-layout'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function CollectionEmptyL() {
  const { auth } = useAuth()

  return (
    <>
      <div className={styles['mainarea-desktop-collection']}>
        <div className={styles['emptycontent']}>
          <p>您還未收藏任何課程</p>
        </div>
        <div className={styles['sbtn']}>
          <Link href="/course">前往購物</Link>
        </div>
      </div>
      <div className={styles['lesson-mobile']}>
        <div className={styles['emptycontent']}>
          <p>您還未收藏任何商課程</p>
        </div>
        <div className={styles['sbtn']}>
          <Link href="/course">前往購物</Link>
        </div>
      </div>
    </>
  )
}

CollectionEmptyL.getLayout = function (page) {
  return <UserLayout currentPage="收藏內容">{page}</UserLayout>
}
