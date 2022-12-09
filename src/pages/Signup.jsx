import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BigButton } from '../components/Buttons'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

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
          <TextField margin='normal' required fullWidth label='ID又はメールアドレス' autoFocus />
          <TextField
            margin='normal'
            required
            fullWidth
            label='パスワード'
            type='password'
            autoComplete='current-password'
          />

          <FormLabel id='demo-radio-buttons-group-label'>区分</FormLabel>
          <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' defaultValue='' name='radio-buttons-group'>
            <FormControlLabel value='mom' control={<Radio />} label='親（おや）' />
            <FormControlLabel value='child' control={<Radio />} label='子供（こども）' />
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
            <BigButton text='登録' />
            <Link to='/'>
              <Typography component='p'>会員登録済の方はこちら</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Signup
