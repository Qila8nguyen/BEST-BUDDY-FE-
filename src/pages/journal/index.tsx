import { Button, Card, Input, Typography } from 'antd'
import React from 'react'
import { FormOutlined } from '@ant-design/icons'
import styles from './styles.module.scss'

const Journal = () => {
  return (
    <Card className={styles.card}>
      <div style={{ width: '100%', marginBottom: '30px' }}>
        <Typography.Title style={{ textAlign: 'center' }} level={2}>
          Your Space
        </Typography.Title>
        <Typography.Title style={{ textAlign: 'center' }} level={5}>
          Build your own happiness
        </Typography.Title>
        <FormOutlined style={{ display: 'flex', justifyContent: 'flex-end' }} />
      </div>
      <div>
        <Input.TextArea
          autoSize={{ minRows: 7, maxRows: 30 }}
          allowClear={true}
        />
      </div>
      <Button style={{ marginTop: '20px' }}>Post</Button>
    </Card>
  )
}

export default Journal
