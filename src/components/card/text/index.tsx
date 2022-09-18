import { Button, Card, Input, message, Radio, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import StrengthSvg from 'public/asset/icons/muscle.svg'

type TextCardProps = {
  backgroundColor: string
  icon: React.ReactNode
  title: string
  text?: string
}

export const TextCard: React.FC<TextCardProps> = (props) => {
  const [message, setMessage] = useState<string>('')
  const { backgroundColor, icon, title, text } = props
  const selections = [
    { value: 'positive', label: 'Positive' },
    { value: 'healthy', label: 'Healthy' },
    { value: 'balance', label: 'Balance' },
    { value: 'breakthrough', label: 'Breakthrough' },
    { value: 'attractive', label: 'Attractive' },
  ]

  const onInputMessage = (value: string) => {
    setMessage(value)
  }
  const onClickButton = () => {}

  return (
    <Card
      style={{ backgroundColor: backgroundColor }}
      className={styles.container}
    >
      <div className={styles.title}>
        <div className={styles.icon}>{icon}</div>
        <Typography.Text>{title}</Typography.Text>
      </div>
      {text ? (
        <div>{text}</div>
      ) : (
        <div>
          <Input.TextArea
            onPressEnter={onClickButton}
            onChange={(e) => onInputMessage(e.target.value)}
          ></Input.TextArea>
          <Button onClick={onClickButton} />
        </div>
      )}
    </Card>
  )
}
