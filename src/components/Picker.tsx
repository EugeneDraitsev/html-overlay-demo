import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Draggable from 'react-draggable'
import { Box, Button, Card, Typography } from '@material-ui/core'
import elementPicker from 'element-picker'

const Content = styled(Card)`
  position: fixed;
  width: 300px;
  z-index: 99999999;
`
const PickButton = styled(Button)`
  margin-left: 10px;
  margin-bottom: 10px;
`
const ElementsList = styled.div`
  border-top: 1px solid gray;
  min-height: 150px;
  max-height: 150px;
  overflow-y: auto;
  padding: 0 5px;
`

const pickTypes = ['price', 'title', 'image'] as const

interface PickerElement extends HTMLElement {
  pickType: typeof pickTypes[number]
}

export const Picker = () => {
  const [pickedElements, setPickedElements] = useState<PickerElement[]>([])

  const onPick = (pickType: typeof pickTypes[number]) => {
    elementPicker.init({
      onClick: (element: HTMLElement) => {
        setPickedElements((elements) => {
          // @ts-ignore
          element.pickType = pickType
          return elements.concat(element as PickerElement)
        })
      },
    })
  }

  return (
    <Draggable defaultPosition={{ x: 30, y: 30 }} scale={1} bounds="parent">
      <Content>
        <Box p={2}>
          {pickTypes.map((pickType) => (
            <PickButton
              key={pickType}
              variant="contained"
              color="primary"
              onClick={() => onPick(pickType)}
            >
              Pick {pickType}
            </PickButton>
          ))}
        </Box>
        Picked Elements:
        <ElementsList>
          {pickedElements.map((element, index) => (
            <Typography key={index} noWrap>
              <strong>{element.pickType}: </strong>
              <span>{element.outerHTML}</span>
            </Typography>
          ))}
        </ElementsList>
      </Content>
    </Draggable>
  )
}
