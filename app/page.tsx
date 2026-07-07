'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/login")
    }, 0);
  },[])
  return (
    <></>
  )
}

export default page