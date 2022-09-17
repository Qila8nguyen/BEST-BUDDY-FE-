import { Checkbox, Form, Input, Spin } from 'antd'
import React, { FC, useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Text from 'antd/lib/typography/Text'
import { mutationHandler } from 'src/libs/api/graphql-handler'
import { AdminOrgContext } from 'src/pages/_app'
import { CREATE_OR_UPDATE_NOTIFICATION_SETTING } from 'src/constants/graphql'
import Spinning from 'src/components/spinning'
import { PLATFORMNAME } from 'src/constants/typeEnum'

const { Item } = Form

const EmailSettingForm: FC<{
  onSubmit: () => void
  setForm: (form: any) => void
}> = (props) => {
  const { onSubmit } = props
  const info = useContext(AdminOrgContext)
  const { setForm } = props
  const [isLoading, setIsLoading] = useState(false)
  const [isDefault, setIsDefault] = useState(false)
  const [form] = Form.useForm()
  setForm(form)
  console.log('email setting')
  const [mutateFunction, { data, loading, error }] = mutationHandler(
    CREATE_OR_UPDATE_NOTIFICATION_SETTING,
  )

  useEffect(() => {
    setIsLoading(loading)

    if (error) {
      console.log('error', error)
    }
  }, [loading])

  const onFinishForm = (value: any) => {
    console.log('onFinishForm', value)
    console.log('info', info)

    // not validate yet !!!
    mutateFunction({
      variables: {
        createOrUpdateNotificationSettingInput: {
          userId: info.userId,
          orgId: info.orgId,
          platform: PLATFORMNAME.EMAIL,
          variant: JSON.stringify({
            email: value.email,
            password: value.password,
          }),
          isDefault,
        },
      },
    }).then(() => {
      console.log('after mutation', data)
      onSubmit()
    })
  }

  const onFailedForm = () => {
    console.log('onFinishFailed')
  }
  return (
    (isLoading && <Spinning />) || (
      <div className={styles.container}>
        <Form
          form={form}
          onFinish={onFinishForm}
          onFinishFailed={onFailedForm}
          className={styles['form-container']}
        >
          <Text style={{ color: 'grey' }}>Email</Text>
          <Item
            name={'email'}
            className={styles['form-item']}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Please input a valid email!',
              },
            ]}
          >
            <Input
              placeholder="John@gmail.com"
              bordered={false}
              style={{ padding: 0 }}
            />
          </Item>
          <Text style={{ color: 'grey' }}>App password</Text>
          <Item
            // label={"Password"}
            name={'password'}
            className={styles['form-item']}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              placeholder="at least 8 characters"
              bordered={false}
              style={{ padding: 0 }}
            />
          </Item>

          <Item>
            <Checkbox
              checked={isDefault}
              onClick={() => setIsDefault(!isDefault)}
            >
              Wanna set this as default email ?
            </Checkbox>
          </Item>
        </Form>
      </div>
    )
  )
}

export default EmailSettingForm
