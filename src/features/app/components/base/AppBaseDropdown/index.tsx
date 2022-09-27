// React
import { memo } from 'react'

// Components
import { AppBaseMenu } from '@/features/app/components'
import { StyledDropdown } from './components'

// Interfaces
import { IDropdownProps } from './interfaces'

// Antd
import { Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

// i18n
import { useTranslation } from 'react-i18next'

const AppBaseDropdown = memo((props: IDropdownProps) => {
  // Hook
  const { t } = useTranslation()

  return (
    <StyledDropdown
      trigger={props?.trigger ? props?.trigger : ['click']}
      overlay={<AppBaseMenu items={props.items} />}
    >
      {props?.children ? (
        props?.children
      ) : (
        <a onClick={e => e.preventDefault()}>
          <Space>
            {t('app.table.action')}
            <DownOutlined />
          </Space>
        </a>
      )}
    </StyledDropdown>
  )
})

AppBaseDropdown.displayName = 'AppBaseDropdown'

export { AppBaseDropdown }
