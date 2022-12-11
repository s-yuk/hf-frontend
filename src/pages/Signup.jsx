import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'

const Signup = () => {
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
          Signup
        </Typography>
        <Box component='form' sx={{ mt: 1 }}>
          <TextField margin='normal' required fullWidth label='ユーザー名' autoFocus />
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
            <BigButton text='登録' />

            <Typography component='p'>会員登録済の方は<Link to='/'>こちら  </Link></Typography>

          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Signup
