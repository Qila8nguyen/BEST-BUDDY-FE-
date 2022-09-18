import { Card, Input, Typography } from 'antd'
import React, { useState } from 'react'

type QuestionProps = {
  setAnswerList?: any
  answerList?: string[]
  setAnswerByStep: any
}
export const PresentQuestion: React.FC<QuestionProps> = (props) => {
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
        {'What are you gratitude for?'}{' '}
      </Typography.Title>
      <Input.TextArea
        onChange={(e) => onTextChange(e.target.value)}
        maxLength={1000}
        required={true}
      />
    </Card>
  )
}
