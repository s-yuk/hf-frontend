import * as React from 'react'
import { useState } from 'react'
import { CurrencyYen } from '@mui/icons-material'
import {
  Avatar,
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  Button,
} from '@mui/material'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Stack } from '@mui/system'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'

// userBox作成

const textstyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const MomMain = () => {
  const [select, setSelect] = React.useState(1)
  const handleClose = () => setUpdopen(false)
  const closeUser = () => setUser(false)

  const handleChange = (event) => {
    setSelect(event.target.value)
  }

  const [updopen, setUpdopen] = useState(false)
  const handleOpen = () => {
    setUpdopen(true)
  }

  const [user, setUser] = useState(false)
  const openUser = () => {
    setUser(true)
  }
  return (
    <>
      <Header title={'○○さんのポイント'} />
      <Box
        component='main'
        sx={{
          width: '100%',
          height: '40vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 'solid 1px',
        }}
      >
        <Button variant='text' onClick={openUser}>
          ユーザー管理
        </Button>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            mt: 0,
          }}
        ></Avatar>
        <Typography>ユーザー</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CurrencyYen />
          <Typography
            variant='h3'
            component='p'
            icon
            sx={{
              fontWeight: '700',
              p: 2,
              '&::after': {
                content: '"pt"',
                fontSize: '1.5rem',
              },
            }}
          >
            {500}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '40vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'solid 1px',
        }}
      >
        <Stack direction='row'>
          <FormControl sx={{ m: 1 }}>
            <Select
              style={{ fontSize: '' }}
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper'
              value={select}
              onChange={handleChange}
            >
              <MenuItem value={1}>+</MenuItem>
              <MenuItem value={2}>-</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 1, fontSize: '2rem' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CurrencyYen />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
        <MiddleButton text={'追加'} handleOpen={handleOpen}></MiddleButton>

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
              height: '20%',
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

        <Modal
          open={user}
          onClose={() => setUser(false)}
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
              height: '40%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: '5px' }}>
              変更情報を
              <br />
              入力してください。
            </Typography>

            <TextField
              id='standard-multiline-flexible'
              style={{ textstyle }}
              label='表示名'
              onChange={(e) => handleChange(e)}
              variant='standard'
              sx={{ mb: '10px' }}
            />

            <CloseSmall text='確定' handleClose={closeUser}></CloseSmall>
            <CloseSmall text='戻る' handleClose={closeUser}></CloseSmall>
            <Button
              variant='outlined'
              color='error'
              sx={{ fontSize: '0.5rem', position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}
            >
              アカウント削除
            </Button>
          </Box>
        </Modal>
      </Box>
      <Footer />
    </>
  )
}

export default MomMain
