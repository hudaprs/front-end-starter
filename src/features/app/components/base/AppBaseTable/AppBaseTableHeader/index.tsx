// React
import { memo } from 'react'

// Components
import { StyledSelectOptionWrapper } from './components'
import {
  AppBaseSelectOption,
  AppBaseInputSearch
} from '@/features/app/components'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { IAppBaseTableHeaderProps } from './interfaces'

const LIMIT: { label: string | number; value: string | number }[] = [
  10, 50, 100
].map(limit => ({
  label: limit,
  value: limit
}))

const AppBaseTableHeader = memo(
  ({ left, loading, onChange }: IAppBaseTableHeaderProps) => {
    // Hook
    const { t } = useTranslation()

    return (
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  items-center justify-center'>
        {/* Left */}
        <div>{left ? left : <></>}</div>

        {/* Center */}
        <div className='w-full justify-center items-center flex'>
          <StyledSelectOptionWrapper>
            <AppBaseSelectOption
              options={LIMIT}
              placeholder={t('app.limit')}
              onChange={value => onChange('limit', value)}
              loading={loading}
            />
          </StyledSelectOptionWrapper>
        </div>

        {/* Right */}
        <div>
          <AppBaseInputSearch
            onSearch={(value: string) => onChange('search', value)}
            loading={loading}
          />
        </div>
      </div>
    )
  }
)

AppBaseTableHeader.displayName = 'AppBaseTableHeader'

export { AppBaseTableHeader }
