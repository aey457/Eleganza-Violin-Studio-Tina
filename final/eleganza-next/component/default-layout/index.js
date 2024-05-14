import { useState, useEffect } from 'react'
import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'
import LoginForm from '@/component/users/form/login'

export default function DefaultLayout({ children }) {
  const { auth } = useAuth()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Eleganza Studio</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  )
}
