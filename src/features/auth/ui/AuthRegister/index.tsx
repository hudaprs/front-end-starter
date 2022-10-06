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

// Interfaces
import { IAuthRegisterForm } from '@/features/auth/interfaces/auth.interface'

// Rtk
import { useAuth_registerMutation } from '@/features/auth/redux/auth.rtk'
import { notificationUtils_open } from '@/features/app/utils/notification.utils'

const AuthRegister = () => {
  // Hook
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  // Register
  const [auth_register, { isLoading: isRegisterLoading }] =
    useAuth_registerMutation()

  /**
   * @description Redirect to login
   *
   * @return {void} void
   */
  const onRedirectToLogin = useCallback((): void => {
    navigate('/auth/login')
  }, [navigate])

  /**
   * @description Register handler
   *
   * @param {IAuthRegisterForm} form
   *
   * @return {Promise<void>} Promise<void>
   */
  const onSubmit = useCallback(
    async (form: IAuthRegisterForm): Promise<void> => {
      try {
        const registerResponse = await auth_register({ body: form }).unwrap()

        notificationUtils_open('success', {
          message: registerResponse.message
        })

        navigate('/auth/login')
      } catch (_) {
        //
      }
    },
    [navigate, auth_register]
  )

  return (
    <div data-testid='auth-register'>
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
        {/* Full Name */}
        <AppBaseFormItem
          name='fullName'
          label={t('app.user.fullName')}
          rules={[{ required: true }]}
        >
          <AppBaseInput placeholder={t('app.user.fullName')} />
        </AppBaseFormItem>

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
          rules={[{ required: true, min: 8, type: 'string' }]}
        >
          <AppBaseInput type='password' placeholder={t('app.user.password')} />
        </AppBaseFormItem>

        {/* Remember Me & Reset Password  */}
        <StyledCredentialsContainer>
          {/* Checkbox Of Remember Me */}
          <AppBaseFormItem
            name='agree'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement'))
              }
            ]}
          >
            <AppBaseCheckbox>
              <AppBaseLabel fontSize={16}>
                {t('auth.privacy')}{' '}
                <AppBaseLabel fontColor={APP_COLOR_LIGHT.PRIMARY} fontSize={16}>
                  {t('auth.termsOfUse').toLowerCase()}{' '}
                </AppBaseLabel>
                {t('app.and').toLowerCase()} {t('app.our').toLowerCase()}{' '}
                <AppBaseLabel fontColor={APP_COLOR_LIGHT.PRIMARY} fontSize={16}>
                  {t('auth.policy').toLowerCase()}
                </AppBaseLabel>
              </AppBaseLabel>
            </AppBaseCheckbox>
          </AppBaseFormItem>
        </StyledCredentialsContainer>

        {/* Register Button */}
        <AppBaseButton
          type='primary'
          htmlType='submit'
          height={50}
          className='mt-6'
          loading={isRegisterLoading}
          block
        >
          {t('auth.createAccount')}
        </AppBaseButton>

        {/* Information if user didn't have account */}
        <div className='flex items-center gap-1 mt-5 justify-center'>
          <AppBaseLabel fontSize={16}>
            {t('auth.alreadyHaveAccount')}?
          </AppBaseLabel>
          <AppBaseLabel
            fontColor={APP_COLOR_LIGHT.PRIMARY}
            className='cursor-pointer'
            onClick={onRedirectToLogin}
            fontSize={16}
            data-testid='login-button'
          >
            {t('auth.login')}
          </AppBaseLabel>
        </div>
      </Form>
    </div>
  )
}

export { AuthRegister }
