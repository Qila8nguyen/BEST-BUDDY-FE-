import React from 'react'
import { Typography } from 'antd'
import LogoSvg from 'public/asset/icons/best-buddy.svg'
import styles from './styles.module.scss'

export const DashboardTitle = () => {
  return (
    <div className={styles.title}>
      <h2 className={styles.content}>{'Setting up your comfort space with'}</h2>
      <LogoSvg />
    </div>
  )
}
