import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { Header } from '../components/Header'
import ChartApi from '../components/ChartApi'
import { ChildFooter } from '../components/Footer'

const ChildChart = () => {
  const [open, setOpen] = useState(false)
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
            height: '80%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            textAlign: 'center',
            overflow: 'scroll',
            pt: 4,
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h3'>
            ああああああああああああああああああああああああああああああああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            あああああ
            <br />
            <br />
          </Typography>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              position: 'fixed',
              top: '0',
              right: '0',
              fontSize: '1.5rem',
            }}
          >
            ✕
          </Button>
        </Box>
      </Modal>
      <Header title='チャート' IconNone='flase' />
      <ChartApi />
      <Button
        onClick={() => setOpen(true)}
        sx={{
          bgcolor: '#ff00ff',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          position: 'fixed',
          bottom: '10%',
          right: '1%',
          fontSize: '2rem',
          color: 'white',
          '&:hover': {
            bgcolor: 'purple',
          },
        }}
      >
        ?
      </Button>
      <ChildFooter />
    </>
  )
}

export default ChildChart
