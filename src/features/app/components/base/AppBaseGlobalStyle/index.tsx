// Styled Components
import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const AppBaseGlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: 'DMSans-Regular';
    src: url('/src/assets/fonts/DMSans-Regular.ttf') format('truetype');
  }

  body {
    font-family: 'DmSans-Regular', Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
  }
`

export { AppBaseGlobalStyle }
