import * as React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs.jsx'
import '../css/customer.css'
import { MiddleButton } from '../components/Buttons'
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
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClick = () => {
    setOpen(true)
    console.log(open)
  }

  return (
    <Box>
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
            label='メールアドレス'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton text='変更' />
          </div>
        </div>
        <MiddleButton text='アカウント削除' sx={{}} />
        <IconTabs />
      </div>
    </Box>
  )
}

export default ChildCustomer
