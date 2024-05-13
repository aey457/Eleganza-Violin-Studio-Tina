import { useState, useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'

export default function Index() {
  const { auth } = useAuth()
  const router = useRouter()

  return (
    <>
      <div className="box d-flex justify-content-center">\(⊙ᗜ⊙)/</div>
      <style jsx>
        {`
          .box {
            font-size: 250px;
          }
        `}
      </style>
    </>
  )
}
