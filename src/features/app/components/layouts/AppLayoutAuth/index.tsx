// React
import { memo } from 'react'

// Components
import {
  StyledWrapper,
  StyledContainer,
  StyledFormContainer,
  StyledBanner
} from './components'
import { AppBaseLabel, AppRouteWrapper } from '@/features/app/components'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { IAppLayoutAuthProps } from './interfaces'

// Assets
import AppImage from '@/assets/images/app.png'
import LoginImage from '@/assets/images/auth/login.png'
import RegisterImage from '@/assets/images/auth/register.png'

const AppLayoutAuth = memo(({ isLogin }: IAppLayoutAuthProps) => {
  // Hook
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledFormContainer>
          {/* Header & Icon - Left Side */}
          <div
            className='flex flex-col items-center gap-8 mb-4'
            data-testid='auth-layout-left-side'
          >
            <img src={AppImage} alt='App' width={'90px'} height={'55.5px'} />

            <AppBaseLabel isBold fontSize={26}>
              {t(`auth.${isLogin ? 'login' : 'register'}`)}
            </AppBaseLabel>
          </div>

          {/* Content Here */}
          <AppRouteWrapper />
        </StyledFormContainer>

        {/* Banner - Right Side */}
        <StyledBanner data-testid='auth-layout-right-side'>
          <img
            src={isLogin ? LoginImage : RegisterImage}
            alt='App'
            width={'647px'}
            height={'602px'}
          />
        </StyledBanner>
      </StyledContainer>
    </StyledWrapper>
  )
})

AppLayoutAuth.displayName = 'AppLayoutAuth'

export { AppLayoutAuth }
