import { Layout } from 'antd'
import styles from './styles.module.scss'
import { FC } from 'react'
import { GetStartedHeader } from './header'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const GetStartedLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout
      className={styles.layout}
    >
      <GetStartedHeader />
        {children}
    </Layout>
  )
}
