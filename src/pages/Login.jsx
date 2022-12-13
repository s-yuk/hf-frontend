import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, FormControl, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'

function Login() {
  return (
    <Container
      component='main'
      sx={{
        mt: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Login
      </Typography>
      <FormControl sx={{ mt: 1 }} fullWidth>
        <TextField margin='normal' required label='ユーザー名' autoFocus />
        <TextField margin='normal' required label='パスワード' type='password' autoComplete='current-password' />
        <Box
          sx={{
            mt: 5,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <BigButton>ログイン</BigButton>
          <Link to='/signup'>
            <Typography component='p'>会員登録がまだの方はこちら</Typography>
          </Link>
        </Box>
      </FormControl>
    </Container>
  )
}

export default Login
