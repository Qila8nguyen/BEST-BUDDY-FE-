import { useState, useEffect } from 'react'
import axios from 'axios'
import * as serviceWorker from './serviceWorker'
import { notification } from 'antd'

export type SubscriptionErrorType = {
  name: String
  code: Number
  message: String
}

const pushNotificationSupported = serviceWorker.isPushNotificationSupported()
// check push notifications are supported by the browser

export const usePushNotifications = () => {
  let notification =
    typeof Notification !== 'undefined' ? Notification.permission : null
  const [userConsent, setSuserConsent] =
    useState<NotificationPermission | null>(notification)

  //
  //to manage the user consent: Notification.permission is a JavaScript native function that return the current state of the permission
  //We initialize the userConsent with that value
  const [userSubscription, setUserSubscription] =
    useState<PushSubscription | null>(null)
  //to manage the use push notification subscription
  const [pushServerSubscriptionId, setPushServerSubscriptionId] = useState()
  //to manage the push server subscription
  const [error, setError] = useState<boolean | SubscriptionErrorType>(false)
  //to manage errors
  const [loading, setLoading] = useState(true)
  //to manage async actions

  useEffect(() => {
    if (pushNotificationSupported && serviceWorker) {
      setLoading(true)
      setError(false)
      serviceWorker.register()
    }
  }, [])
  //if the push notifications are supported, registers the service worker
  //this effect runs only the first render

  useEffect(() => {
    setLoading(true)
    setError(false)
    const getExixtingSubscription = async () => {
      const existingSubscription = await serviceWorker.getUserSubscription()
      setUserSubscription(existingSubscription)
      setLoading(false)
    }
    getExixtingSubscription()
  }, [])
  //Retrieve if there is any push notification subscription for the registered service worker
  // this use effect runs only in the first render

  /**
   * define a click handler that asks the user permission,
   * it uses the setSuserConsent state, to set the consent of the user
   * If the user denies the consent, an error is created with the setError hook
   */
  const onClickAskUserPermission = () => {
    setLoading(true)
    setError(false)
    serviceWorker.askUserPermission().then((consent) => {
      setSuserConsent(consent)
      if (consent !== 'granted') {
        setError({
          name: 'Consent denied',
          message: 'You denied the consent to receive notifications',
          code: 0,
        })
      }
      setLoading(false)
    })
  }
  //

  /**
   * define a click handler that creates a push notification subscription.
   * Once the subscription is created, it uses the setUserSubscription hook
   */
  const onClickSusbribeToPushNotification = async () => {
    setLoading(true)
    setError(false)
    await serviceWorker
      .createNotificationSubscription()
      .then(async function (subscription) {
        console.log('subscription', subscription)
        setUserSubscription(subscription)
        setLoading(false)
        await onClickSendSubscriptionToPushServer(subscription)
      })
      .catch((err) => {
        console.error(
          "Couldn't create the notification subscription",
          err,
          'name:',
          err.name,
          'message:',
          err.message,
          'code:',
          err.code,
        )
        setError(err)
        setLoading(false)
      })
  }

  const onClickSendSubscriptionToPushServer = async (
    sub?: PushSubscription,
  ) => {
    setLoading(true)
    setError(false)
    console.log('userSubscription', userSubscription)
    console.log('sub', sub)
    await axios
      .post(`${process.env.NEXT_PUBLIC_APOLLO_SERVER_IP}/subscription`, {
        data: userSubscription || sub,
      })
      .then(async function (response) {
        console.log('onClick Send to Server', response.data.id)
        setPushServerSubscriptionId(response.data.id)
        await onClickSendNotification(response.data.id)
        setLoading(false)
      })
      .catch((err) => {
        console.log('err', err)
        setLoading(false)
        setError(err)
      })
  }

  const onClickSendNotification = async (id: String) => {
    console.log('id to Send Notif', id)
    setLoading(true)
    setError(false)
    axios
      .get(`${process.env.NEXT_PUBLIC_APOLLO_SERVER_IP}/subscription/${id}`)
      .catch((error) => {
        setLoading(false)
        setError(error)
      })
    setLoading(false)
  }

  return {
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    onClickSendNotification,
    userConsent,
    pushNotificationSupported,
    userSubscription,
    error,
    loading,
  }
  // return
}
