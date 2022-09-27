// Styled Components
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }
`

export { StyledWrapper }
