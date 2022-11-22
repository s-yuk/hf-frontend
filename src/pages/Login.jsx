import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import '../css/login.css'
import { MiddleButton } from '../components/Buttons'

const Login = () => {
  return (
    <>
      <div class='background1'>
        {/* <img src={icon}  width="130px" height="130px" /> */}
        <div className='input-text-login'>
          <TextField id='outlined-basic' label='メール' variant='outlined' sx={{ width: 300 }} />
          <Box sx={{ m: 5 }} />
          <TextField id='outlined-basic' label='パスワード' variant='outlined' sx={{ width: 300 }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to='/child'>
            <MiddleButton text='ログイン' />
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to='/signup'>
            <MiddleButton text='新規会員登録はこちら' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
