import { Input, Modal } from 'antd'
import { TextAreaRef } from 'antd/lib/input/TextArea'
import React, { useRef, useState } from 'react'
type QuestionModalProps = {
  visible: boolean
  setVisible: any
}

export const QuestionModal: React.FC<QuestionModalProps> = (props) => {
  const { visible, setVisible } = props
  const [answer, setAnswer] = useState<string>()
  const textRef = useRef<TextAreaRef>()
  const onOkModal = () => {
    console.log('OKK :>>')
    setVisible(false)
  }
  const onCancelModal = () => {
    // không cho cancel :>>
    console.log('Close :>>')
    setVisible(false)
  }

  const onTextChange = (str: string) => {
    console.log('Text updated = ', str)
    setAnswer(str)
  }
  return (
    <Modal
      visible={visible}
      onOk={onOkModal}
      onCancel={onCancelModal}
      title={'What do you gratitude for? '}
      closable={false}
    >
      <Input.TextArea
        onChange={(e) => onTextChange(e.target.value)}
        maxLength={1000}
      />
    </Modal>
  )
}
