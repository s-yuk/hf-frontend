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
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BigButton, MiddleButton, SmallButton } from '../components/Buttons'
import { useAuth } from '../hooks/useAuth'

function Signup() {
  const [open, setOpen] = useState(false)
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
        <TextField margin='normal' required label='なまえ' autoFocus onChange={(e) => setUsername(e.target.value)} />
        <TextField margin='normal' required label='めーるあどれす' onChange={(e) => setEmail(e.target.value)} />
        <TextField
          margin='normal'
          required
          label='ぱすわーど'
          type='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
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
          <BigButton onClick={() => setOpen(true)}>登録</BigButton>

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
                  id='standard-read-only-input'
                  label='なまえ'
                  defaultValue='ないよう'
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                />
                <TextField
                  id='standard-read-only-input'
                  label='めーるあどれす'
                  defaultValue='ないよう'
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                  sx={{ mt: 2 }}
                />
                <TextField
                  id='standard-read-only-input'
                  label='ぱすわーど'
                  defaultValue='ないよう'
                  InputProps={{
                    readOnly: true,
                  }}
                  variant='standard'
                  sx={{ mt: 2 }}
                />
                <TextField
                  id='standard-read-only-input'
                  label='おかあさん？こども？'
                  defaultValue='こどもぉ'
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
                onClick={handleSignUp}
              >
                登録
              </MiddleButton>
              <br />
              <br />
              <SmallButton onClick={() => setOpen(false)}>もどる</SmallButton>
            </Box>
          </Modal>
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
