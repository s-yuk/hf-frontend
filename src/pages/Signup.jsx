import { LockOutlined } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { BigButton, MiddleButton, SmallButton } from '../components/Buttons'

const Signup = () => {
  const [mailError, setMailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [passError, setPassError] = useState('')
  const handleBlur = (e) => {
    const email = e.target.value
    if (!email) {
      setMailError('未入力です。')
    } else if (email.indexOf('@') === -1) {
      setMailError('不正なメールアドレスです。')
    } else {
      setMailError()
    }
  }
  const handleBlur2 = (e) => {
    const username = e.target.value
    if (!username) {
      setNameError('未入力です。')
    } else {
      setNameError()
    }
  }
  const handleBlur3 = (e) => {
    const username = e.target.value
    if (!username) {
      setPassError('未入力です。')
    } else {
      setPassError()
    }
  }
  // if (!mailError && !nameError && !passError) {
  //   setError()
  // } else {
  //   setError('登録だめ')
  // }

  const [open, setOpen] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(["token"]);


  // signup apiを叩く関数
  const signUp = async () => {
    try {
      const { data } = await axios.post('http://localhost:8080/api/register', {
        username: username,
        email: email,
        password: password,
        role: role === '1' ? 'CHILD' : 'PARENT'
      }, { withCredentials: true })

      setCookie("token", data, { maxAge: 60 * 60 * 24 * 300 });

      role === '1' ? navigate('/child', { replace: true }) : navigate('/homepic', { replace: true })
    } catch (error) {
      console.log("email登録済")
      console.log(error)
    }

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
        アカウントをつくる
      </Typography>
      <FormControl sx={{ mt: 1 }} fullWidth>
        <TextField
          margin='normal'
          required
          label='なまえ'
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleBlur2}
        />
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        <TextField
          margin='normal'
          required
          label='めーるあどれす'
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
        />
        {mailError && <p style={{ color: 'red' }}>{mailError}</p>}
        <TextField
          margin='normal'
          required
          label='ぱすわーど'
          type='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur3}
        />
        {passError && <p style={{ color: 'red' }}>{passError}</p>}
        <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' defaultValue='' name='radio-buttons-group'>
          <FormControlLabel
            value={1}
            control={<Radio />}
            label='子ども(こども)'
            onChange={(e) => setRole(e.target.value)}
          />
          <FormControlLabel
            value={2}
            control={<Radio />}
            label='親(おや)'
            onChange={(e) => setRole(e.target.value)}
          />
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
          <BigButton onClick={() => setOpen(true)}>とうろく</BigButton>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '60%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
              <FormControl fullWidth>
                <TextField
                  label='なまえ'
                  value={username}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                />
                <TextField
                  label='めーるあどれす'
                  value={email}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                  sx={{ mt: 2 }}
                />
                <TextField
                  label='ぱすわーど'
                  value={password}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                  sx={{ mt: 2 }}
                />
                <TextField
                  label='おかあさん？こども？'
                  value={role === '1' ? 'こども' : 'おかあさん'}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                  sx={{ mt: 2 }}
                />
              </FormControl>
              <MiddleButton
                sx={{
                  mt: '10px',
                }}
                onClick={signUp}
              >
                とうろく
              </MiddleButton>
              <br />
              <br />
              <SmallButton onClick={() => setOpen(false)}>もどる</SmallButton>
            </Box>
          </Modal>
          <Typography component='p'>
            ろぐいんは<Link to='/'>こちら </Link>
          </Typography>
        </Box>
      </FormControl>
    </Container>
  )
}

export default Signup
