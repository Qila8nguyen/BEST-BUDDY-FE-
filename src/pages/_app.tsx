import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
} from '@apollo/client'
import { AppProps } from 'next/app'
import { Card, ConfigProvider } from 'antd'
import 'styles/globals.scss'
import { DashboardLayout } from '../components/layout/dashboard'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePushNotifications } from '../usePushNotifications'
import axios from 'axios'

export const BackEndClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.NEXT_PUBLIC_APOLLO_SERVER_IP}/graphql`,
})

export const UserContext = createContext({
  orgId: 'org2',
  userId: 'user2',
  userName: 'phuongnghi',
})

const App = ({ Component, pageProps }: any) => {
  const {
    userConsent,
    pushNotificationSupported,
    userSubscription,
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    onClickSendNotification,
    error,
    loading,
  } = usePushNotifications()

  useEffect(() => {
    onClickAskUserPermission()
    onClickSusbribeToPushNotification()
    // onClickSendSubscriptionToPushServer()
  }, [])

  useEffect(() => {
    if (error) {
      onClickAskUserPermission()
    }
  }, [error])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope,
            )
          },
          function (err) {
            console.log('Service Worker registration failed: ', err)
          },
        )
      })
    }
  }, [])

  return (
    <ConfigProvider prefixCls="platform">
      <ApolloProvider client={BackEndClient}>
        <UserContext.Provider
          value={{ orgId: 'org2', userId: 'user2', userName: 'nghi' }}
        >
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </UserContext.Provider>
      </ApolloProvider>
    </ConfigProvider>
  )
}

export default App
