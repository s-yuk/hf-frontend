import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const SmallButton = ({ text, handleOpen }) => {
  return (
    <Button
      onClick={handleOpen}
      sx={{
        width: '30%',
        bgcolor: 'red',
        borderRadius: '100px',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: '600',
        '&:hover': {
          bgcolor: 'rgb(228, 0, 0)',
        },
      }}
    >
      {text}
    </Button>
  )
}

export const CloseSmall = ({ text, handleClose }) => {
  return (
    <Button
      onClick={handleClose}
      sx={{
        width: '30%',
        bgcolor: 'red',
        borderRadius: '100px',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: '600',
        '&:hover': {
          bgcolor: 'rgb(228, 0, 0)',
        },
      }}
    >
      {text}
    </Button>
  )
}

export const MiddleButton = ({ text, handleOpen }) => {
  return (
    <Box>
      <Button
        onClick={handleOpen}
        sx={{
          width: '50%',
          bgcolor: 'red',
          borderRadius: '100px',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: '600',
          '&:hover': {
            bgcolor: 'rgb(228, 0, 0)',
          },
        }}
      >
        {text}
      </Button>
    </Box>
  )
}

export const BigButton = ({ text }) => {
  return (
    <Button
      sx={{
        width: '80%',
        bgcolor: 'red',
        borderRadius: '100px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: '600',
        '&:hover': {
          bgcolor: 'rgb(228, 0, 0)',
        },
      }}
    >
      {text}
    </Button>
  )
}
