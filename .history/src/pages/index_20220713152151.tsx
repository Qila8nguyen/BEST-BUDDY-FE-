import { Button, Spin, Tabs, Typography } from 'antd'
import React from 'react'
import TabPaneSetting from 'src/components/tabpane-setting'
import { PLATFORMNAME } from 'src/constants/typeEnum'

const { TabPane } = Tabs
const { Title } = Typography

const NotificationSetting = () => {
  return (
    <div>
      <Title level={2}>Organization 2</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Email Setting" key="1">
          <TabPaneSetting platformName={PLATFORMNAME.EMAIL} />
        </TabPane>
        <TabPane tab="Slack Setting" key="2">
          <TabPaneSetting platformName={PLATFORMNAME.SLACK} />
        </TabPane>
        <TabPane tab="Teams Setting" key="3">
          <TabPaneSetting platformName={PLATFORMNAME.TEAMS} />
        </TabPane>
      </Tabs>
    </div>
  )
  // )
}

export default NotificationSetting
