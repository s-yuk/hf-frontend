import { useState } from 'react'
import { Modal, Box, Typography, TextField } from '@mui/material'
import { ChildFooter } from '../components/Footer'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { Header } from '../components/Header'
import { useAuth } from '../hooks/useAuth'
import '../css/mui.css'
import { Link } from 'react-router-dom'

const textStyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const ChildCustomer = () => {
  const { user } = useAuth()

  const [updateOpen, setUpdateOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  return (
    <Box>
      <Header title='子供用会員ページ' IconNone='flase' />
      <div className='background2'>
        <div
          className='customerdata'
          style={{
            transform: 'translateY(40px)',
            display: 'grid',
            gap: '20px',
          }}
        >
          <TextField
            style={{ textStyle }}
            label='名前'
            variant='standard'
            value="富士川"
          />
          <TextField
            style={{ textStyle }}
            type='password'
            label='パスワード'
            variant='standard'
            value="ACdnifjozge3"
          />
          <TextField
            style={{ textStyle }}
            label='新しいパスワード'
            variant='standard'
          />
          <TextField
            style={{ textStyle }}
            label='メールアドレス'
            variant='standard'
            value="nfdxncnsknc@gmail.com"
          />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton onClick={() => setUpdateOpen(true)}>へんこう</MiddleButton>
          </div>
          <Modal
            open={updateOpen}
            onClose={() => setUpdateOpen(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '30%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: '5px' }}>
                へんこうしました
              </Typography>

              <CloseSmall onClick={() => setUpdateOpen(false)}>もどる</CloseSmall>
            </Box>
          </Modal>
          <div style={{ textAlign: 'center' }}>
            <SmallButton onClick={() => setDeleteOpen(true)}>あかうんとをけす</SmallButton>
          </div>
          <Modal
            open={deleteOpen}
            onClose={() => setDeleteOpen(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: '10px' }}>
                ほんとうにけしますか?
              </Typography>

              <Box sx={{ mb: '10px' }}>
                <Link to='/'><SmallButton>けす</SmallButton></Link>
              </Box>
              <Box>
                <CloseSmall onClick={() => setDeleteOpen(false)}>もどる</CloseSmall>
              </Box>
            </Box>
          </Modal>
        </div>
        <ChildFooter />
      </div>
    </Box>
  )
}

export default ChildCustomer
