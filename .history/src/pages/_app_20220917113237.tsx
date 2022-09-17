import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
} from '@apollo/client'
import { AppProps } from 'next/app'
import { Card, ConfigProvider } from 'antd'
import 'styles/globals.scss'
import { DashboardLayout } from '../../src/components/Layout/dashboard'
import { createContext, useState } from 'react'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.NEXT_PUBLIC_APOLLO_SERVER_IP}/graphql`,
  defaultOptions,
})

export const AdminOrgContext = createContext({
  orgId: 'org2',
  userId: 'user2',
})
const App = ({ Component, pageProps }: any) => {
  return (
    <ConfigProvider prefixCls="platform">
      <ApolloProvider client={client}>
        <AdminOrgContext.Provider value={{ orgId: 'org2', userId: 'user2' }}>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </AdminOrgContext.Provider>
      </ApolloProvider>
    </ConfigProvider>
  )
}

export default App
