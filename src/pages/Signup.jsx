import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'
const Signup = () => {
  const url = 'http://localhost:8080/api/register'
  const data = {
    username: 'alice',
    password: '12345',
    email: 'bbb@gmail.com',
    roles: [
      {
        id: 1,
        name: 'ROLE_USER'
      }
    ]
  }
  const handleClick = async () => {
    const res = await axios.post(url, data)
    console.log(data)
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
          Signup
        </Typography>
        <FormControl sx={{ mt: 1 }} fullWidth>
          <TextField margin='normal' required label='ユーザー名' autoFocus />
          <TextField margin='normal' required label='ID又はメールアドレス' />
          <TextField
            margin='normal'
            required
            label='パスワード'
            type='password'
            autoComplete='current-password'
          />

          <FormLabel id='demo-radio-buttons-group-label'>区分</FormLabel>
          <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' defaultValue='' name='radio-buttons-group'>
            <FormControlLabel value='mom' control={<Radio />} label='親(おや)' />
            <FormControlLabel value='child' control={<Radio />} label='子ども(こども)' />
          </RadioGroup>

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
            <BigButton text='登録' onClick={handleClick} />
            <Link to='/'>
              <Typography component='p'>会員登録済の方はこちら</Typography>
            </Link>
          </Box>
        </FormControl>
      </Box>
    </Container>
  )
}

export default Signup
