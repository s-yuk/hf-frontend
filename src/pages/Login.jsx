import { LockOutlined } from "@mui/icons-material"
import { Avatar, Box, Container, FormControl, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom"
import { BigButton } from "../components/Buttons"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cookies, setCookie] = useCookies(["token"])
  const navigate = useNavigate()

  const login = async () => {
    try {
      const { data } = await axios.post('http://localhost:8080/api/login', {
        email: email,
        password: password,
      }, { withCredentials: true })
      console.log(data)

      setCookie("token", data.token, { maxAge: 60 * 60 * 24 * 300 });

      data.role === 'CHILD' ? navigate('/child', { replace: true }) : navigate('/homepic', { replace: true })
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
        ろぐいん
      </Typography>
      <FormControl sx={{ mt: 1 }} fullWidth>
        <TextField margin='normal' required label='めーる' autoFocus onChange={(e) => setEmail(e.target.value)} />
        <TextField margin='normal' required label='ぱすわーど' type='password' autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
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
          <BigButton onClick={login}>ろぐいん</BigButton>
          <Typography component='p'>
            とうろくのかたは
            <Link to='/signup'> こちら </Link>
          </Typography>
        </Box>
      </FormControl>
    </Container>
  )
}

export default Login
