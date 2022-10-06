// React
import { memo } from 'react'

// Interfaces
import { IAppLayoutEmptyProps } from './interfaces'

// Components
import { StyledWrapper } from './components'

const AppLayoutEmpty = memo(({ children }: IAppLayoutEmptyProps) => {
  return <StyledWrapper>{children}</StyledWrapper>
})

AppLayoutEmpty.displayName = 'AppLayoutEmpty'

export { AppLayoutEmpty }
