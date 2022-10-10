// Styled Components
import styled from 'styled-components'

// Antd
import { Breadcrumb, BreadcrumbProps, BreadcrumbItemProps } from 'antd'

const AppBaseBreadcrumb = styled(({ ...rest }: BreadcrumbProps) => (
  <Breadcrumb {...rest} />
))``

const AppBaseBreadcrumbItem = styled(({ ...rest }: BreadcrumbItemProps) => (
  <Breadcrumb.Item {...rest} />
))``

export { AppBaseBreadcrumb, AppBaseBreadcrumbItem }
