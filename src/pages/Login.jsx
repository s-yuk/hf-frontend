import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'

const Login = () => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
  const handleSubmit = async (e) => {
    const res = await axios.post(
      'http://localhost:8080/api/login',
      {
        username: 'john',
        password: '1234',
      },
      { headers: headers }
    )
    console.log(res)
    const token = res.data
    console.log(token)
  }
  return (
    <Container component='main'>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Box component='form' sx={{ mt: 1 }}>
          <TextField type='text' margin='normal' required fullWidth label='ID又はメールアドレス' autoFocus />
          <TextField
            margin='normal'
            required
            fullWidth
            label='パスワード'
            type='password'
            autoComplete='current-password'
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 7,
              gap: 3,
            }}
          >
            <BigButton text='ログイン' />
            <Link to='/signup'>
              <Typography component='p'>会員登録がまだの方はこちら</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <button onClick={handleSubmit}>ボタン</button>
    </Container>
  )
}

export default Login
