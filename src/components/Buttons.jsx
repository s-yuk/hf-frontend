import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const SmallButton = ({ text, to, handleOpe }) => {
  return (
    <Button
      onClick={handleOpen}
      component={Link}
      to={to}
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

export const BigButton = ({ text, handleOpen }) => {
  return (
    <>
      <Button
        onClick={handleOpen}
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
    </>
  )
}
