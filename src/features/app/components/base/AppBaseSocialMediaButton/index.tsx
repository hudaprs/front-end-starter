// React
import { memo } from 'react'

// Components
import { AppBaseButton } from '@/features/app/components'
import { StyledWrapper } from './components'

// i18n
import { useTranslation } from 'react-i18next'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

// Assets
import GoogleIcon from '@/assets/images/icon/google.png'
import FacebookIcon from '@/assets/images/icon/facebook.png'

const AppBaseSocialMediaButton = memo(() => {
  // Hook
  const { t } = useTranslation()

  return (
    <StyledWrapper data-testid='wrapper'>
      {/* Google */}
      <AppBaseButton
        data-testid='google'
        color={APP_COLOR.DARK}
        backgroundColor={APP_COLOR_LIGHT.BACKGROUND}
        width={164}
        height={50}
        icon={<img src={GoogleIcon} width={'24px'} height={'24px'} />}
      >
        {t('app.social.google')}
      </AppBaseButton>

      {/* Facebook */}
      <AppBaseButton
        data-testid='facebook'
        color={APP_COLOR.DARK}
        backgroundColor={APP_COLOR_LIGHT.BACKGROUND}
        width={164}
        height={50}
        icon={<img src={FacebookIcon} width={'9px'} height={'18px'} />}
      >
        {t('app.social.facebook')}
      </AppBaseButton>
    </StyledWrapper>
  )
})

AppBaseSocialMediaButton.displayName = 'AppBaseSocialMediaButton'

export { AppBaseSocialMediaButton }
