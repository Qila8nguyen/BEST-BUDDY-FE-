import { Skeleton } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Homepage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/openup-question')
  }, [])
  return <Skeleton />
}

export default Homepage
