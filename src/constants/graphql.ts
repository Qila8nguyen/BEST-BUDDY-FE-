export const CREATE_OR_UPDATE_NOTIFICATION_SETTING = `
mutation CreateOrUpdateNotificationSetting($createOrUpdateNotificationSettingInput: CreateNotificationSettingInput!) {
  createOrUpdateNotificationSetting(createOrUpdateNotificationSettingInput: $createOrUpdateNotificationSettingInput) {
    id
    orgId
    createdBy
    isDefault
    platformInfo {
      variant
    }
  }
}`

export const MUTATION_REMOVE_NOTIFICATION_SETTING = `
mutation RemoveNotificationSetting($removeNotificationSettingId: Int!, $userId: String!) {
  removeNotificationSetting(id: $removeNotificationSettingId, userId: $userId) {
    id
    orgId
    createdBy
    isDefault
    platformInfo {
      variant
    }
  }
}`

export const QUERY_ALL_ACTIVE_NOTIFICATION_SETTINGS_BY_PLATFORM = `
query ActiveNotificationSettingsByPlatform($orgId: String!, $platformName: String!) {
  activeNotificationSettingsByPlatform(orgId: $orgId, platformName: $platformName) {
    id
    orgId
    isDefault
    createdBy
    platformInfo {
      variant
    }
  }
}`

export const QUERY_SEND_EMAIL = `
query Query($sendEmailId: Int!, $emailOptions: MailOptions!) {
  sendEmail(id: $sendEmailId, emailOptions: $emailOptions)
}`

export const QUERY_SEND_SLACK_MESSAGE = `
query Query($sendSlackMessageId: Int!, $text: String!) {
  sendSlackMessage(id: $sendSlackMessageId, text: $text)
}`

export const QUERY_SEND_TEAMS_MESSAGE = `
query Query($sendTeamsMessageId: Int!, $text: String!) {
  sendTeamsMessage(id: $sendTeamsMessageId, text: $text)
}`

export const MUTATION_SET_DEFAULT_NOTIFICATION_SETTING = `
mutation SetDefaultNotificationSetting($setDefaultNotificationSettingId: Int!, $userId: String!) {
  setDefaultNotificationSetting(id: $setDefaultNotificationSettingId, userId: $userId) {
    id
    orgId
    updateAt
    updatedBy
    platform
  }
}`
