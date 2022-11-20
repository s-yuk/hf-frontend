import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const SmallButton = ({ text, to }) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        width: '30%',
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

export const MiddleButton = ({ text }) => {
  return (
    <Button
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
