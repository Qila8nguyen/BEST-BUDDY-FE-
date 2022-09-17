import { FC, ReactNode } from 'react'

import { DashboardSider } from './sider'
import { Layout } from 'antd'
import styles from './styles.module.scss'

type DashboardLayoutProps = {
  children?: ReactNode
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Layout className={styles.layout}>
        <DashboardSider />
        <div className={styles.children}>{children}</div>
      </Layout>
    </>
  )
}
