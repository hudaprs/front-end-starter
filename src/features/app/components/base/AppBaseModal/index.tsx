// React
import { memo } from 'react'

// Components
import { StyledModal } from './components'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { IModalProps } from './interfaces'

const AppBaseModal = memo((props: IModalProps) => {
  // Hook
  const { t } = useTranslation()

  return (
    <StyledModal
      {...props}
      centered={props?.centered}
      maskClosable={props?.maskClosable}
      okText={props?.okText ? props?.okText : t('app.action.submit')}
      cancelText={
        props?.cancelText ? props?.cancelText : t('app.action.cancel')
      }
    >
      {props?.children ? props?.children : <></>}
    </StyledModal>
  )
})

AppBaseModal.displayName = 'AppBaseModal'

export { AppBaseModal }
