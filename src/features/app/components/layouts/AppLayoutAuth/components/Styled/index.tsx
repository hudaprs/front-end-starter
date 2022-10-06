// Styled Components
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledFormContainer = styled.div`
  width: 30vw;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 68px;

  @media (max-width: 1024px) {
    width: 100vw;
    padding: 0px 30px;
  }
`

const StyledBanner = styled.div`
  background-color: #f1f4fa;
  width: 70vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

export { StyledWrapper, StyledContainer, StyledFormContainer, StyledBanner }
