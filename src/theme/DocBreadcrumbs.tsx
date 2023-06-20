import styled from '@emotion/styled'
import OriginalDocBreadcrumbs from '@theme-original/DocBreadcrumbs'
import React from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default function DocBreadcrumbs(props) {
  return (
    <Container>
      <OriginalDocBreadcrumbs {...props} />
    </Container>
  )
}
