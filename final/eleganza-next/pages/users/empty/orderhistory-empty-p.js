import React from 'react'
import Head from 'next/head'
import styles from './empty.module.css'
import UserLayout from '@/component/users/user-layout'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function CollectionEmptyP() {
  const { auth } = useAuth()

  return (
    <>
      <div className={styles['mainarea-desktop-collection']}>
        <div className={styles['emptycontent']}>
          <p>您尚未有任何一筆訂單</p>
        </div>
        <div className={styles['sbtn']}>
          <Link href="/products">前往購物</Link>
        </div>
      </div>
      <div className={styles['lesson-mobile']}>
        <div className={styles['emptycontent']}>
          <p>您尚未有任何一筆商品訂單</p>
        </div>
        <div className={styles['sbtn']}>
          <Link href="/products">前往購物</Link>
        </div>
      </div>
    </>
  )
}

CollectionEmptyP.getLayout = function (page) {
  return <UserLayout currentPage="歷史訂單">{page}</UserLayout>
}
