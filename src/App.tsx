import React from 'react'
import styled from 'styled-components/macro'
import { CircularProgress } from '@material-ui/core'
import { useAsync, useSearchParam, useWindowSize } from 'react-use'

import { Picker } from './components'

const Wrapper = styled.div`
  min-height: 100vh;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const BASE_URL = 'http://localhost:4000'

function App() {
  const url = useSearchParam('url')
  const { width, height } = useWindowSize()

  const { value, error, loading } = useAsync(async () => {
    const res = await fetch(
      `${BASE_URL}?url=${url}&width=${width}&height=${height * 3}`,
    ).then((x) => x.json())
    return `<style>${res.styleSheets}</style><div>${res.body}</div>`
  }, [url])

  console.log(error)

  return (
    <Wrapper>
      <Picker />
      {error && <Content>{error.message}</Content>}
      {loading && (
        <Content>
          <CircularProgress />
        </Content>
      )}
      {value && <div dangerouslySetInnerHTML={{ __html: value }} />}
    </Wrapper>
  )
}

export default App
