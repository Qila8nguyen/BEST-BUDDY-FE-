import { Button, Space } from 'antd'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { CREATE_NOTIFICATION } from 'src/constants/graphql'
import { BackEndClient, UserContext } from 'src/pages/_app'
import { usePushNotifications } from 'src/usePushNotifications'

import { useLazyMutate } from 'src/utils/graph'

type FooterProps = {
  step: number
  setStep: (step: number) => void
  // allowNextStep: boolean
  answerByStep: string
  setAnswerByStep: any
  answerList: string[]
  setAnswerList: any
}

export const FooterAction = (props: FooterProps) => {
  const { orgId, userId, userName } = useContext(UserContext)
  const { pushServerSubscriptionId } = usePushNotifications()
  // console.log('pushServerSubscriptionId', pushServerSubscriptionId)
  const router = useRouter()
  const {
    step,
    setStep,
    // allowNextStep,
    answerByStep,
    setAnswerByStep,
    answerList,
    setAnswerList,
  } = props
  const [allowNextStep, setAllowNextStep] = useState<boolean>(true)
  const [createUserNotification, { loading, data, error }] = useMutation(
    CREATE_NOTIFICATION,
    {
      variables: {
        data: {
          userName,
          subscriptionId: pushServerSubscriptionId || 'abc',
          manifestList: answerList,
        },
      },
      client: BackEndClient,
    },
  )

  useEffect(() => {
    if (answerByStep.length === 0) {
      setAllowNextStep(false)
    }
  }, [answerByStep])

  useEffect(() => {
    if (data) {
      console.log('CREATED DATA :>> ', data)
    }
  }, [data])

  const isBackBtnDisabled = () => {
    switch (step) {
      case 0:
        return true
      case 1:
      case 2:
      case 3:
      default:
        return false
    }
  }

  const isNextBtnDisabled = () => {
    switch (step) {
      case 0:
      case 1:
      case 2:
      case 3:
      default:
        return false
    }
  }

  const onBackBtnClick = () => {
    switch (step) {
      case 0:
        return
      case 1:
        setStep(0)
        break
      case 2:
        setStep(1)
        break
      case 3:
        setStep(2)
        break
      case 4:
        setStep(3)
        break
      default:
        break
    }
    answerList.pop()
    console.log('answerList', answerList)
    setAnswerList([...answerList])
  }

  const onNextBtnClick = async () => {
    if (answerByStep.length !== 0) {
      setAllowNextStep(false)
      console.log('answerByStep', answerByStep)
      setAnswerList([...answerList, answerByStep])
      switch (step) {
        case 0:
          setStep(1)
          setAnswerByStep('')

          break
        case 1:
          setStep(2)
          setAnswerByStep('')

          break
        case 2:
          setStep(3)
          setAnswerByStep('')

          break
        case 3:
          setStep(4)
          setAnswerByStep('')
          break

        default:
          setAnswerByStep('')
          break
      }
    }

    if (step === 3) {
      console.log('pushServer', pushServerSubscriptionId)
      await createUserNotification()
      router.push('/dashboard')
    }

    setAllowNextStep(true)
    setAnswerByStep('')
  }

  return (
    <div className={styles['container']}>
      <Space size={'middle'}>
        <Button
          onClick={() => onBackBtnClick()}
          disabled={isBackBtnDisabled()}
          className="lg-btn"
        >
          Back
        </Button>
        <Button
          onClick={() => onNextBtnClick()}
          disabled={isNextBtnDisabled()}
          className="lg-btn"
          type="primary"
        >
          {step === 3 ? 'Finish' : 'Next'}
        </Button>
      </Space>
      {!allowNextStep && (
        <div style={{ color: '#008ac4' }}>i would love to hear from you !</div>
      )}
    </div>
  )
}
