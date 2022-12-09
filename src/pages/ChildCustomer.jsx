import * as React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import {} from '../_index.js'
import { ChildFooter } from '../components/Footer.jsx'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Modal, Box, Typography, Button } from '@mui/material'

const textstyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const ChildCustomer = () => {
  const handleClose = () => setUpdopen(false)
  const dhandleClose = () => setDelopen(false)

  const [updopen, setUpdopen] = useState(false)
  const handleOpen = () => {
    setUpdopen(true)
  }

  const [delopen, setDelopen] = useState(false)

  const dhandelopen = () => {
    setDelopen(true)
  }

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
            // margin: '10% 0 0 0'
          }}
        >
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='名前'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='パスワード'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='新しいパスワード'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='メールアドレス'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton text='変更' handleOpen={handleOpen} />
          </div>
          <Modal
            open={updopen}
            onClose={() => setUpdopen(false)}
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
                変更完了しました。
              </Typography>

              <CloseSmall text='戻る' handleClose={handleClose}></CloseSmall>
            </Box>
          </Modal>
          <div style={{ textAlign: 'center' }}>
            <SmallButton text='アカウント削除' handleOpen={dhandelopen} sx={{}} />
          </div>
          <Modal
            open={delopen}
            onClose={() => setDelopen(false)}
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
                本当に削除しますか？
              </Typography>

              <Box sx={{ mb: '10px' }}>
                <SmallButton text='削除' to={'/login'}></SmallButton>
              </Box>
              <Box>
                <CloseSmall text='戻る' handleClose={dhandleClose}></CloseSmall>
              </Box>
            </Box>
          </Modal>
        </div>
        <div style={{ margin: '0 auto' }}>
          <ChildFooter />
        </div>
      </div>
    </Box>
  )
}

export default ChildCustomer
