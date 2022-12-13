import { LockOutlined } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'
import { useAuth } from '../hooks/useAuth'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const { signUp } = useAuth()
  const handleSignUp = () => {
    const userInfo = {
      username,
      password,
      email,
      roles: [
        {
          id: role,
          name: role === '1' ? 'ROLE_USER' : 'ROLE_ADMIN',
        },
      ],
    }
    signUp(userInfo)
  }

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
        Signup
      </Typography>
      <FormControl sx={{ mt: 1 }} fullWidth>
        <TextField
          margin='normal'
          required
          label='ユーザー名'
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField margin='normal' required label='ID又はメールアドレス' onChange={(e) => setEmail(e.target.value)} />
        <TextField
          margin='normal'
          required
          label='パスワード'
          type='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormLabel id='demo-radio-buttons-group-label'>区分</FormLabel>
        <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' defaultValue='' name='radio-buttons-group'>
          <FormControlLabel
            value={1}
            control={<Radio />}
            label='子ども(こども)'
            onChange={(e) => setRole(e.target.value)}
          />
          <FormControlLabel value={2} control={<Radio />} label='親(おや)' onChange={(e) => setRole(e.target.value)} />
        </RadioGroup>
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
          <BigButton onClick={handleSignUp}>登録</BigButton>
          <Link to='/'>
            <Typography component='p'>
              会員登録済の方は<Link to='/'>こちら </Link>
            </Typography>
          </Link>
        </Box>
      </FormControl>
    </Container>
  )
}

export default Signup
