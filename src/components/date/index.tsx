import { Card, Typography } from 'antd'
import React from 'react'
import styles from './styles.module.scss'

export const DateDisplay = () => {
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <Card>
        <Typography.Text style={{ color: 'grey' }}>{'Date \n'}</Typography.Text>
        {date}
      </Card>
      <Card>
        <Typography.Text style={{ color: 'grey' }}>
          {'Month \n'}
        </Typography.Text>
        {month + 1}
      </Card>
      <Card>
        <Typography.Text style={{ color: 'grey' }}>{'Year \n'}</Typography.Text>
        {year}
      </Card>
    </div>
  )
}
