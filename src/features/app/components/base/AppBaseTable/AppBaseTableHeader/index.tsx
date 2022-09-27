// React
import { memo, useCallback } from 'react'

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
import { TInputTypeTable } from '@/features/app/interfaces/app-type.interface'

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

    /**
     * @description Watch any change in form
     *
     * @param {TInputTypeTable} inputType
     * @param {string | number} value
     *
     * @return {void} void
     */
    const _onChange = useCallback(
      (inputType: TInputTypeTable, value: string | number): void => {
        onChange(inputType, value)
      },
      [onChange]
    )

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
              onChange={value => _onChange('_limit', value)}
              loading={loading}
            />
          </StyledSelectOptionWrapper>
        </div>

        {/* Right */}
        <div>
          <AppBaseInputSearch
            onSearch={(value: string) => _onChange('search', value)}
            loading={loading}
          />
        </div>
      </div>
    )
  }
)

AppBaseTableHeader.displayName = 'AppBaseTableHeader'

export { AppBaseTableHeader }
