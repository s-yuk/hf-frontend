import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import '../css/login.css'

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
        <div class='btn-box'>
          <div class='btn'>
            <Link to={`/home`}>
              <p>ログイン</p>
            </Link>
          </div>
        </div>
        <div class='member-link'>
          <p>会員登録済みの方</p>
          <Link to={`/signup`}>こちら</Link>
        </div>
      </div>
      <footer></footer>
    </>
  )
}

export default Login
