import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React, { useState } from 'react'
import { Header } from '../components/Header'
import IconTabs from '../components/IconTabs'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

const Homepic = () => {
  const handleClose = () => setOpen(false)

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          placeItems: 'center',
          gap: 3,
        }}
      >
        <Avatar sx={{ width: 120, height: 120 }} component={Link} to='/mommain' />
        <Avatar sx={{ width: 120, height: 120 }} />
        <Avatar sx={{ width: 120, height: 120 }} />
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 0, width: '100%' },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField id='filled-basic' label='子供のID入力' variant='filled' />
            </Box>
          </Typography>

          <CloseSmall text='追加' handleClose={handleClose}></CloseSmall>
        </Box>
      </Modal>
      <Button
        onClick={handleOpen}
        sx={{
          bgcolor: '#ff00ff',
          width: '70px',
          height: '70px',
          borderRadius: '100px',
          position: 'fixed',
          bottom: '10%',
          right: '0',
          fontSize: '2rem',
          color: 'white',
          '&:hover': {
            bgcolor: 'purple',
          },
        }}
      >
        +
      </Button>
      <Footer />
    </>
  )
}

export default Homepic
