import { Button, styled } from '@mui/material'

export const CloseSmall = styled(Button)({
  width: '30%',
  backgroundColor: 'red',
  borderRadius: '100px',
  color: 'white',
  fontSize: '0.8rem',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: 'rgb(228, 0, 0)',
  },
})

export const SmallButton = styled(Button)({
  width: '30%',
  backgroundColor: 'red',
  borderRadius: '100px',
  color: 'white',
  fontSize: '0.8rem',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: 'rgb(228, 0, 0)',
  },
})

export const MiddleButton = styled(Button)({
  width: '50%',
  backgroundColor: 'red',
  borderRadius: '100px',
  color: 'white',
  fontSize: '1rem',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: 'rgb(228, 0, 0)',
  },
})

export const BigButton = styled(Button)({
  width: '80%',
  backgroundColor: 'red',
  borderRadius: '100px',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: 'rgb(228, 0, 0)',
  },
})
