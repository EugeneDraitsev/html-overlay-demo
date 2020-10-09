import React, { useState } from 'react'
import styled from 'styled-components/macro'
import elementPicker from 'element-picker'
import { Box, Button, Container, TextField } from '@material-ui/core'

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`
const UrlForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const Site = styled.object`
  margin-top: 20px;
  width: 100%;
  height: calc(100vh - 100px);
  border: 1px solid black;
`

function App() {
  const [url, setUrl] = useState('')
  const [inputValue, setInputValue] = useState('test.html')

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUrl(inputValue)
    elementPicker.init({
      onClick: (element: any) => {
        console.log(element)
      },
    })
  }

  return (
    <Wrapper>
      <UrlForm onSubmit={onSubmit}>
        <TextField
          label="Url"
          value={inputValue}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Box ml={2} />
        <Button variant="contained" color="primary" type="submit">
          Go
        </Button>
      </UrlForm>

      {url && (
        <Site data={url} type="text/html">
          Alternative Content
        </Site>
      )}
    </Wrapper>
  )
}

export default App
