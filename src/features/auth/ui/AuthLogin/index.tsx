// React
import { useCallback } from 'react'

// Components
import { StyledCredentialsContainer } from '@/features/auth/components'
import {
  AppBaseButton,
  AppBaseDivider,
  AppBaseFormItem,
  AppBaseLabel,
  AppBaseInput,
  AppBaseCheckbox,
  AppBaseSocialMediaButton
} from '@/features/app/components'

// i18n
import { useTranslation } from 'react-i18next'

// Constant
import { APP_COLOR_LIGHT } from '@/features/app/constant/app-style.constant'

// Antd
import { Form } from 'antd'

// React Router DOM
import { useNavigate } from 'react-router-dom'

// Dispatcher
import { useAppDispatch } from '@/features/app/hooks/app.hook'

// Interfaces
import { IAuthAttrsLogin } from '@/features/auth/interfaces/auth-attrs.interface'

const AuthLogin = () => {
  // Hook
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  /**
   * @description Redirect to register
   *
   * @return {void} void
   */
  const onRedirectToRegister = useCallback((): void => {
    navigate('/auth/register')
  }, [navigate])

  /**
   * @description Redirect to reset password
   *
   * @return {void} void
   */
  const onRedirectToResetPassword = useCallback((): void => {
    navigate('/auth/reset-password')
  }, [navigate])

  /**
   * @description Login handler
   *
   * @param {IAuthAttrsLogin} form
   *
   * @return {Promise<void>} Promise<void>
   */
  const onSubmit = useCallback(
    async (form: IAuthAttrsLogin): Promise<void> => {
      try {
        //
      } catch (_) {
        //
      }
    },
    [dispatch, auth_login]
  )

  return (
    <div data-testid='auth-login'>
      {/* Social Media Button */}
      <AppBaseSocialMediaButton />

      {/* Divider */}
      <div className='mt-4 w-full'>
        <AppBaseDivider />
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
          rules={[{ required: true, type: 'email' }]}
        >
          <AppBaseInput placeholder='example@gmail.com' />
        </AppBaseFormItem>

        {/* Password */}
        <AppBaseFormItem
          name='password'
          label={t('app.user.password')}
          rules={[{ required: true, type: 'string' }]}
        >
          <AppBaseInput type='password' placeholder={t('app.user.password')} />
        </AppBaseFormItem>

        {/* Remember Me & Reset Password  */}
        <StyledCredentialsContainer>
          {/* Checkbox Of Remember Me */}
          <AppBaseFormItem name='rememberMe' valuePropName='checked'>
            <AppBaseCheckbox>
              <AppBaseLabel fontSize={14.22} fontWeight={400}>
                {t('auth.rememberMe')}?
              </AppBaseLabel>
            </AppBaseCheckbox>
          </AppBaseFormItem>

          {/* Reset Password Link */}
          <AppBaseFormItem>
            <AppBaseLabel
              fontSize={14.22}
              fontWeight={400}
              fontColor={APP_COLOR_LIGHT.PRIMARY}
              className='cursor-pointer'
              onClick={onRedirectToResetPassword}
              data-testid='reset-password'
            >
              {t('auth.resetPassword')}?
            </AppBaseLabel>
          </AppBaseFormItem>
        </StyledCredentialsContainer>

        {/* Login Button */}
        <AppBaseButton
          type='primary'
          htmlType='submit'
          height={50}
          loading={auth_isActionLoading}
          block
        >
          {t('auth.login')}
        </AppBaseButton>

        {/* Information if user didn't have account */}
        <div className='flex items-center gap-1 mt-5 justify-center'>
          <AppBaseLabel fontSize={16}>{t('auth.notHaveAccount')}?</AppBaseLabel>
          <AppBaseLabel
            fontColor={APP_COLOR_LIGHT.PRIMARY}
            className='cursor-pointer'
            onClick={onRedirectToRegister}
            fontSize={16}
            data-testid='register-button'
          >
            {t('auth.newAccount')}
          </AppBaseLabel>
        </div>
      </Form>
    </div>
  )
}

export { AuthLogin }
