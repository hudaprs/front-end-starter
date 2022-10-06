// Styled Components
import styled from 'styled-components'

// Antd
import { Layout, LayoutProps, SiderProps } from 'antd'

// Layout
const { Header, Sider, Content } = Layout

const AppBaseLayout = styled(Layout)<{
  content?: boolean
  collapsed?: boolean & LayoutProps
}>`
  margin-left: ${props =>
    props?.content && !props?.collapsed
      ? '200px'
      : props?.collapsed
      ? '80px'
      : '0px'};
  background-color: #f4f4f4;
`

const AppBaseLayoutHeader = styled(Header)`
  background-color: #fff;
`

const AppBaseLayoutSider = styled(Sider)<SiderProps>`
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`

const AppBaseLayoutContent = styled(Content)`
  margin: 0px;
`

export {
  AppBaseLayout,
  AppBaseLayoutHeader,
  AppBaseLayoutSider,
  AppBaseLayoutContent
}
