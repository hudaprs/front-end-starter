// Styled Components
import styled from 'styled-components'

// Constant
import { APP_COLOR } from '@/features/app/constant/app-style.constant'

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledCard = styled.div`
  background-color: ${APP_COLOR.WHITE};
  width: 658px;
  height: 658px;
  display: inherit;
  justify-content: inherit;
  flex-direction: inherit;
  border-radius: 10px;
  padding: 0px 80px;
`

export { StyledWrapper, StyledCard }
