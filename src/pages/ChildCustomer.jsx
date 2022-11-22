import * as React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs.jsx'
import '../css/ChildCustomer.css'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Modal, Box, Typography, Button } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ChildCustomer = () => {
  const handleClose = () => setOpen(false)

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Box>
      <Header title='子供用会員ページ' />
      <div className='background2'>
        <div className='customerdata'>
          <TextField
            id='standard-multiline-flexible'
            label='名前'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            label='パスワード'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            label='新しいパスワード'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            x
            label='メールアドレス'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton text='変更' handleOpen={handleOpen} />
          </div>
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
                変更完了しました。
              </Typography>

              <CloseSmall text='戻る' handleClose={handleClose}></CloseSmall>
            </Box>
          </Modal>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <SmallButton text='アカウント削除' sx={{}} />
          </div>
        </div>
        <div style={{ margin: '0 auto' }}>
          <IconTabs />
        </div>
      </div>
    </Box>
  )
}

export default ChildCustomer
