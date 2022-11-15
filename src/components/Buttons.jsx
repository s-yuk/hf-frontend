import { Button } from '@mui/material'

export const SmallButton = ({ text }) => {
  return (
    <Button
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
