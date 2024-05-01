import React from 'react'
import Head from 'next/head'
import Header from '../default-layout/header'
import Footer from '../default-layout/footer'
import styles from './main.module.scss'
import SideNav from './sidenav'
import Breadcrumb from './breadcrumb'


export default function UserLayout({ children }) {
  return (
    <>
      <Head>
        <title>User Layout</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Header />
      <Breadcrumb />
      <div className={`wrap flex-grow-1`}>
        <main className={styles['main']}>
          <SideNav />
            {children}
        </main>
      </div>
      <Footer />
    </>
  )
}