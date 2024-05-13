import { useState, useEffect } from 'react'
import React from 'react'
import '@/styles/globals.scss'
import DefaultLayout from '@/component/default-layout'
import { AuthProvider } from '@/hooks/use-auth'

export default function App({ Component, pageProps }) {
  // 導入bootstrap的JS函式庫
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  const getLayout =
    Component.getLayout ||
    ((page) => (
      <DefaultLayout>
        <div className="container">{page}</div>
      </DefaultLayout>
    ))
  return (
    <>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </>
  )
}
