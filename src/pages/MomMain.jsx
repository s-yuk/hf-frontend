import { useEffect, useState } from 'react'
import { CurrencyYen } from '@mui/icons-material'
import {
  Avatar,
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  Button,
  Stack,
} from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MiddleButton, CloseSmall } from '../components/Buttons'
import useNotification from '../components/Toast'
import 'react-toastify/dist/ReactToastify.css'

const textStyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const MomMain = () => {
  const [open, setOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)
  const { id } = useParams()
  const [user, setUser] = useState([])
  const [point, setPoint] = useState('')
  const [select, setSelect] = useState(1)
  const fetchUserById = async () => {
    const {data} = await axios.get(`http://localhost:8080/api/user/${id}`)
    setUser(data)
    console.log(data);
  }
  useEffect(() => {
    fetchUserById()
  }, [updateOpen])

  const addPoint = async () => {
    console.log(select)
    await axios.put(`http://localhost:8080/api/user/${id}/point`, {
      havePoint: parseInt(user.havePoint, 10) + parseInt(point, 10)
    })
    setUpdateOpen(true)
    setPoint('')
  }

  const { updated } = useNotification()

  const handleChange = (event) => {
    setSelect(event.target.value)
  }

  return (
    <>
      <Header title={`${user.username}さんのポイント`} />
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
        <Button variant='text' onClick={() => setOpen(true)}>
          ユーザー管理
        </Button>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            mt: 0,
          }}
        />
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
            sx={{
              fontWeight: '700',
              p: 2,
              '&::after': {
                content: '"pt"',
                fontSize: '1.5rem',
              },
            }}
          >
            {user.havePoint}
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
            value={point}
            type='number'
            onChange={(e) => setPoint(e.target.value)}
            sx={{ m: 1, fontSize: '2rem' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CurrencyYen />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <MiddleButton onClick={addPoint}>更新</MiddleButton>

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

            <CloseSmall onClick={() => setUpdateOpen(false)}>戻る</CloseSmall>
          </Box>
        </Modal>

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
              style={{ textStyle }}
              label='表示名'
              onChange={(e) => handleChange(e)}
              variant='standard'
              sx={{ mb: '10px' }}
            />

            <CloseSmall onClick={() => setOpen(false)}>確定</CloseSmall>
            <CloseSmall onClick={() => setOpen(false)}>戻る</CloseSmall>
            <Button
              variant='outlined'
              color='error'
              sx={{
                fontSize: '0.5rem',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              アカウント削除
            </Button>
          </Box>
        </Modal>
      </Box>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default MomMain
