import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, FormControl, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'

const Login = () => (
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
      ろぐいん
    </Typography>
    <FormControl sx={{ mt: 1 }} fullWidth>
      <TextField margin='normal' required label='なまえ' autoFocus />
      <TextField margin='normal' required label='ぱすわーど' type='password' autoComplete='current-password' />
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
        <BigButton>ろぐいん</BigButton>
        <Typography component='p'>
          会員登録がまだの方は
          <Link to='/signup'> こちら </Link>
        </Typography>
      </Box>
    </FormControl>
  </Container>
)

export default Login
