import { ChildFooter } from '../components/Footer.jsx'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Modal, Box, Typography, TextField } from '@mui/material'
import { useAuth } from '../hooks/useAuth.jsx'

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
      <Header title='子供用会員ページ' />
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
            id='standard-multiline-flexible'
            style={{ textStyle }}
            label='名前'
            variant='standard'
            value={user.username}
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textStyle }}
            type='password'
            label='パスワード'
            variant='standard'
            value={user.password}
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textStyle }}
            label='新しいパスワード'
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textStyle }}
            label='メールアドレス'
            variant='standard'
            value={user.email}
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
                <SmallButton>けす</SmallButton>
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
