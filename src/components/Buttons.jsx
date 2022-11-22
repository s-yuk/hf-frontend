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
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const click = () => {
    console.log(1)
    setOpen(true)
  }
  return (
    <Box>
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
        onClick={click}
      >
        {text}
      </Button>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
