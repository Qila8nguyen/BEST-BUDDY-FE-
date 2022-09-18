import { Steps, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { FooterAction } from 'src/components/footer-action'
import {
  AffirmationCard,
  PastQuestion,
  PresentQuestion,
} from 'src/components/page/question'
import { FutureQuestion } from 'src/components/page/question/step3'

const { Text } = Typography
const { Step } = Steps

export const StepClassMapping: Record<number, string> = {
  1: 'step-1',
  2: 'step-2',
  3: 'step-3',
  4: 'step-4',
  5: 'step-5',
}

const Homepage = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [allowNextStep, setAllowNextStep] = useState<boolean>(false)
  const [step, setStep] = useState(0)
  const [answerByStep, setAnswerByStep] = useState<string>('')
  const [answerList, setAnswerList] = useState<string[]>([])

  useEffect(() => {
    console.log('answerList', answerList)
  }, [answerList])

  const steps = [
    {
      id: 0,
      title: 'Past',
      description: 'Small things build up small happiness',
    },
    {
      id: 1,
      title: 'Present',
      description: 'Small things build up small happiness',
    },
    {
      id: 2,
      title: 'Future',
      description: 'Small things build up small happiness',
    },
    {
      id: 3,
      title: 'Default',
      description: 'Small things build up small happiness',
    },
  ]

  const renderContent = () => {
    switch (step) {
      case 0:
        return <PresentQuestion setAnswerByStep={setAnswerByStep} />
      case 1:
        return <PastQuestion setAnswerByStep={setAnswerByStep} />
      case 2:
        return <FutureQuestion setAnswerByStep={setAnswerByStep} />
      case 3:
        return <AffirmationCard />

      default:
        break
    }
  }

  const onStepChange = (value: number) => {
    setStep(value)
  }

  return (
    <div className="container">
      <div className={styles['container']}>
        <div className={styles['title-container']}>
          <Text className={styles['title']}>{steps.at(step)?.title}</Text>
        </div>
        <div
          className={classNames(
            styles['step-container'],
            'custom-get-started-step',
          )}
        >
          <Steps current={step} onChange={onStepChange} style={{ zIndex: 2 }}>
            {steps.map((item, index) => (
              <Step key={item.id} className={StepClassMapping[index + 1]} />
            ))}
          </Steps>
        </div>
      </div>
      <div className={styles['description']}>
        <Text className={styles['text']}>{steps.at(step)?.description}</Text>
      </div>
      {renderContent()}
      <FooterAction
        step={step}
        setStep={setStep}
        answerByStep={answerByStep}
        setAnswerByStep={setAnswerByStep}
        answerList={answerList}
        setAnswerList={setAnswerList}
      />
    </div>
  )
}

export default Homepage
