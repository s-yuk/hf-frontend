import { Link } from 'react-router-dom'
import icon from './images/icon.png'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import './css/login.css'

const Login = () => {
  return (
    <>
      <header></header>
      <main></main>
      <div class='background1'>
        {/* <img src={icon}  width="130px" height="130px" /> */}
        <div className='input-text-login'>
          <TextField id='outlined-basic' label='メール' variant='outlined' sx={{ width: 300 }} />
          <Box sx={{ m: 5 }} />
          <TextField id='outlined-basic' label='パスワード' variant='outlined' sx={{ width: 300 }} />
        </div>
        <Link to={`/MemberHome/`}>
          <div class='btn-box'>
            <div class='btn'>
              <p>ログイン</p>
            </div>
          </div>
        </Link>
        <div class='member-link'>
          <p>会員登録済みの方</p>
          <Link to={`/MemberRegister/`}>こちら</Link>
        </div>
      </div>
      <footer></footer>
    </>
  )
}

export default Login
