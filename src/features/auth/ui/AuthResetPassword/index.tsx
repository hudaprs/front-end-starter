// React
import { useCallback } from 'react'

// Components
import { StyledCard, StyledWrapper } from './components'
import {
  AppBaseButton,
  AppBaseFormItem,
  AppBaseInput,
  AppBaseLabel
} from '@/features/app/components'

// Assets
import AppIcon from '@/assets/images/app.png'

// i18n
import { useTranslation } from 'react-i18next'

// Antd
import { Form } from 'antd'

// Constant
import { APP_COLOR_LIGHT } from '@/features/app/constant/app-style.constant'

// React Router DOM
import { useNavigate } from 'react-router-dom'

// Interfaces
import { IAuthAttrsResetPassword } from '@/features/auth/interfaces/auth-attrs.interface'

const AuthResetPassword = () => {
  // Hook
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  /**
   * @description Redirect to login
   *
   * @return {void} void
   */
  const onRedirectToLogin = useCallback((): void => {
    navigate('/auth/login')
  }, [navigate])

  /**
   * @description Submit handler
   *
   * @param {IAuthAttrsResetPassword} form
   *
   * @return {Promise<void>} Promise<void>
   */
  const onSubmit = useCallback(
    async (form: IAuthAttrsResetPassword): Promise<void> => {
      try {
        //
      } catch (_) {
        //
      }
    },
    []
  )

  return (
    <StyledWrapper>
      <StyledCard>
        {/* Header */}
        <div className='flex flex-col justify-center items-center text-center gap-6 mb-6'>
          <img src={AppIcon} width={'90.81px'} height={'56px'} />

          <AppBaseLabel fontWeight={700} fontSize={26.63}>
            {t('app.recover')}
          </AppBaseLabel>
        </div>

        {/* Form */}
        <Form
          form={form}
          onFinish={onSubmit}
          layout='vertical'
          requiredMark={false}
        >
          {/* Email */}
          <AppBaseFormItem
            name='email'
            label={t('app.user.email')}
            rules={[{ required: true }]}
          >
            <AppBaseInput placeholder='example@example.com' />
          </AppBaseFormItem>

          {/* Button */}
          <AppBaseButton
            type='primary'
            htmlType='submit'
            className='mt-8'
            height={50}
            loading={auth_isActionLoading}
            block
          >
            {t('auth.resetPassword')}
          </AppBaseButton>
        </Form>

        {/* Remember Your Password?  */}
        <div className='mt-6 flex items-center text-center justify-center gap-1'>
          <AppBaseLabel fontSize={16}>
            {t('auth.rememberAccount')}?
          </AppBaseLabel>
          <AppBaseLabel
            fontSize={16}
            fontColor={APP_COLOR_LIGHT.PRIMARY}
            className='cursor-pointer'
            onClick={onRedirectToLogin}
            data-testid='login-button'
          >
            {t('auth.login')}
          </AppBaseLabel>
        </div>
      </StyledCard>
    </StyledWrapper>
  )
}

export { AuthResetPassword }
