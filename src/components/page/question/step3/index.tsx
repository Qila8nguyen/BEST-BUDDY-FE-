import { Card, Input, Typography } from 'antd'
import React, { useState } from 'react'

export const FutureQuestion = (props: any) => {
  const { setAnswerByStep } = props
  const [answer, setAnswer] = useState<string>()
  const onTextChange = (str: string) => {
    console.log('Text updated = ', str)
    setAnswer(str)
    setAnswerByStep(str)
  }
  return (
    <Card>
      <Typography.Title level={3}>
        {'What do you want to manifest at the end of the day?'}
      </Typography.Title>
      <Input.TextArea
        onChange={(e) => onTextChange(e.target.value)}
        maxLength={1000}
      />
    </Card>
  )
}
