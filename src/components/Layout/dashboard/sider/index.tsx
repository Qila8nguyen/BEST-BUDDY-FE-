import { Layout, Menu, MenuProps } from 'antd'

import AvaFooterCard from '../ava-footer-card'

import React from 'react'
import {
  SettingOutlined,
  FormOutlined,
  BookOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import LogoSvg from 'public/asset/icons/best-buddy.svg'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

const { Sider } = Layout

export const DashboardSider = () => {
  const router = useRouter()

  const onMenuClick: MenuProps['onClick'] = (e) => {
    router.push(e.key)
  }

  const sideData: ItemType[] = [
    {
      key: 'your-space',
      icon: <SettingOutlined />,
      label: 'Your Space',
    },
    {
      key: 'journal',
      icon: <FormOutlined />,
      label: 'Journal',
    },
    {
      key: 'dashboard',
      icon: <BookOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'openup-question',
      icon: <CloseOutlined />,
      label: 'Questions',
    },
  ]

  return (
    <Sider className={styles.sider} collapsible={false}>
      <div className={styles.content}>
        <div>
          <div
            className={styles.logo}
            onClick={() => router.push('/dashboard')}
          >
            <LogoSvg />
          </div>
          <Menu
            mode="inline"
            // defaultSelectedKeys={['/dashboard']}
            selectedKeys={[router.pathname]}
            onClick={onMenuClick}
            items={sideData}
          />

          <div className={styles.footer}>
            <AvaFooterCard />
          </div>
        </div>
      </div>
    </Sider>
  )
}
