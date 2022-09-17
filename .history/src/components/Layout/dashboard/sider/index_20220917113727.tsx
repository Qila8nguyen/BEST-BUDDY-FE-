import { Layout, Menu, MenuProps } from 'antd'

import AvaFooterCard from '../ava-footer-card'

import React from 'react'
import RecommendationSvg from 'public/asset/icons/recommendation.svg'
import { SettingOutlined } from '@ant-design/icons'
import SettingSvg from 'public/asset/icons/setting.svg'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

const { Sider } = Layout

export const DashboardSider = () => {
  const router = useRouter()

  const onMenuClick: MenuProps['onClick'] = (e) => {
    router.push(e.key)
  }

  return (
    <Sider className={styles.sider} collapsible={false}>
      <div className={styles.content}>
        <div>
          <div
            className={styles.logo}
            onClick={() => router.push('/dashboard')}
          ></div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/dashboard']}
            selectedKeys={[router.pathname]}
            onClick={onMenuClick}
            // items={sideData}
          />
        </div>
        <div className={styles.footer}>
          <AvaFooterCard />
        </div>
      </div>
    </Sider>
  )
}
