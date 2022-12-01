import { Box, Button, Modal, Typography } from '@mui/material'
import { Header } from '../components/Header'
import IconTabs from '../components/IconTabs'
import { CloseSmall, SmallButton } from '../components/Buttons'
import { useState } from 'react'
const ChildChart = () => {
  const handleClose = () => setOpen(false)

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Modal
        sx={{
          overflow: 'scroll',
        }}
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
            あああああ 　　　　
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>{' '}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            あああああ 　　　　
          </Typography>
          <CloseSmall text='追加' handleClose={handleClose}></CloseSmall>
        </Box>
      </Modal>
      <Header title='チャート' />
      <Box
        sx={{
          width: '90%',
          height: 300,
          bgcolor: 'black',
          mx: 'auto',
        }}
      ></Box>

      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          mt: 1,
        }}
      >
        <SmallButton text='かう' />
        <SmallButton text='うる' />
      </Box>
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
      <IconTabs />
    </>
  )
}

export default ChildChart
