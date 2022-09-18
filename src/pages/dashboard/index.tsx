import { Card, DatePicker, Typography } from 'antd'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import StrengthSvg from 'public/asset/icons/muscle.svg'
import RelationshipSvg from 'public/asset/icons/relationship.svg'
import LogoSvg from 'public/asset/icons/best-buddy.svg'
import styles from './styles.module.scss'
import { MultiSelectTag, TextCard } from 'src/components/card'
import { VerticalSelectTag } from 'src/components/card/vertical-select'
import { DashboardTitle } from 'src/components/dashboard-title'

import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/es/locale/zh_CN'
import { DateDisplay } from 'src/components/date'
import axios from 'axios'
import { usePushNotifications } from 'src/usePushNotifications'

export const colors: Record<string, string> = {
  pink: 'rgb(255, 237, 246)',
  blue: 'rgb(225, 240, 255)',
  purple: 'rgb(235, 239, 255)',
}
const Dashboard = () => {
  const { onClickSendNotification } = usePushNotifications()
  // useEffect(() => {
  //   onClickSendNotification()
  // }, [])
  return (
    <Card title={<DashboardTitle />}>
      <DateDisplay />
      <div className={styles.container}>
        <div className={styles['two-columns']}>
          <TextCard
            backgroundColor={colors['blue']}
            icon={<StrengthSvg className={styles.blue} />}
            title={'What do you want to manifest?'}
            text={'I want to be more active'}
          />
          <MultiSelectTag
            backgroundColor={colors['pink']}
            icon={<StrengthSvg />}
            title={'What are you grateful for?'}
          />
        </div>
        <div className={styles['three-columns']}>
          <VerticalSelectTag
            backgroundColor={colors['pink']}
            icon={<RelationshipSvg />}
            title={'Today, you want to be'}
          />
          <TextCard
            backgroundColor={colors['blue']}
            icon={<StrengthSvg className={styles.blue} />}
            title={'Set up your daily routine'}
            text={'Be productive'}
          />
          <TextCard
            backgroundColor={colors['purple']}
            icon={<StrengthSvg className={styles.blue} />}
            title={'What or who stops me from the changes ?'}
            text={'I want to be more active'}
          />
          <TextCard
            backgroundColor={colors['purple']}
            icon={<RelationshipSvg className={styles.blue} />}
            title={'Your mind is saying'}
            text={'I want to be more active'}
          />
          <TextCard
            backgroundColor={colors['blue']}
            icon={<StrengthSvg className={styles.blue} />}
            title={'What is you the most happiest thing recently?'}
            text={'I want to be more active'}
          />
        </div>
      </div>
    </Card>
  )
}

export default Dashboard
