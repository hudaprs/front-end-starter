// React
import { memo } from 'react'

// Interfaces
import { ILayoutEmptyProps } from './interfaces'

// Components
import { StyledWrapper } from './components'

const LayoutEmpty = memo(({ children }: ILayoutEmptyProps) => {
  return <StyledWrapper>{children}</StyledWrapper>
})

LayoutEmpty.displayName = 'LayoutEmpty'

export { LayoutEmpty }
