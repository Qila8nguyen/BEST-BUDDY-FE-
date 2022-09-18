import { Button, Card, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import styles from './styles.module.scss'
import { FormOutlined } from '@ant-design/icons'

const Consultant = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ width: '100%' }}>
        <Typography.Title style={{ textAlign: 'center' }} level={2}>
          Your Space
        </Typography.Title>
        <Typography.Title style={{ textAlign: 'center' }} level={5}>
          Build your own happiness
        </Typography.Title>
        <FormOutlined style={{ display: 'flex', justifyContent: 'flex-end' }} />
      </div>
      <div className={styles.container}>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2842&q=80"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ top: '50px' }}
          cover={
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1523698120758-030a38a90d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              height={250}
              style={{ overflow: 'unset' }}
              alt="example"
              src="https://images.unsplash.com/photo-1663405390708-1710c97173ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <Button style={{ width: 'fit-content' }}>{'Create New Post'}</Button>
    </div>
  )
}

export default Consultant
