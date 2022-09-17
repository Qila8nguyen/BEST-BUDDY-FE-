import { Button, Form, Modal } from 'antd'
import { FormInstance } from 'rc-field-form'
import React, { FC, useContext, useState } from 'react'
import { AdminOrgContext } from 'src/pages/_app'
import EmailSettingForm from '../form-setting-page/email-form'
import { PlusOutlined } from '@ant-design/icons'
import { PLATFORMNAME } from 'src/constants/typeEnum'
import SlackSettingForm from '../form-setting-page/slack-form'
import TeamsSettingForm from '../form-setting-page/teams-form'
const ModalForm: FC<{
  onFinishForm: () => void
  platformName: string
}> = (props) => {
  const { platformName } = props
  const [genericForm, setGenericForm] = useState<FormInstance>()
  const [visible, setVisible] = useState<boolean>(false)
  const onFinishForm = () => {
    if (genericForm) {
      console.log('finish Modal')
      genericForm.submit()
      setVisible(false)
    }
  }

  const displaySettingForm = () => {
    switch (platformName) {
      case PLATFORMNAME.EMAIL:
        return (
          <EmailSettingForm
            setForm={setGenericForm}
            onSubmit={props.onFinishForm}
          />
        )
      case PLATFORMNAME.SLACK:
        return (
          <SlackSettingForm
            setForm={setGenericForm}
            onSubmit={props.onFinishForm}
          />
        )

      case PLATFORMNAME.TEAMS:
        return (
          <TeamsSettingForm
            setForm={setGenericForm}
            onSubmit={props.onFinishForm}
          />
        )
    }
  }

  return (
    <div>
      <Button style={{ marginBottom: '20px' }} onClick={() => setVisible(true)}>
        <PlusOutlined />
        {`Add an ${platformName} account`}
      </Button>
      <Modal
        centered={true}
        title={`Notification setting for ${platformName}`}
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onFinishForm}
      >
        {displaySettingForm()}
      </Modal>
    </div>
  )
}

export default ModalForm
