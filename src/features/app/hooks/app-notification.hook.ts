// React
import { useCallback } from 'react'

// Antd
import { notification } from 'antd'
import type { NotificationPlacement } from 'antd/es/notification'

type TNotification = 'success' | 'info' | 'warning' | 'error'
type TNotificationPayload = {
  message: string
  description?: string
  placement?: NotificationPlacement
}

const useAppNotification = () => {
  /**
   * @description Open notification
   *
   * @return {void} void
   */
  const appNotification_open = useCallback(
    (type: TNotification, payload: TNotificationPayload): void => {
      notification[type]({
        ...payload,
        placement: payload?.placement || 'topRight'
      })
    },
    []
  )

  return { appNotification_open }
}

export { useAppNotification }
