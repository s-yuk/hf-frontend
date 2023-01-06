import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../components/Header'
import { CloseSmall } from '../components/Buttons'
import { Footer } from '../components/Footer'
import { useCookies } from 'react-cookie'

const Homepic = () => {
  const [children, setChildren] = useState([])
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState([])
  const [email, setEmail] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies("[token]");


  const fetchChildren = async () => {
    const { data } = await axios.get('http://localhost:8080/api/user/group', { headers: { Authorization: cookies.token } })
    setChildren(data)
  }
  const fetchUser = async () => {
    const { data } = await axios.get('http://localhost:8080/api/user', { headers: { Authorization: cookies.token } })
    setUser(data)
  }
  useEffect(() => {
    fetchUser()
    fetchChildren()
  }, [open])

  const addGroup = async () => {
    await axios.put('http://localhost:8080/api/user/group', {email: email}, { headers: { Authorization: cookies.token } })
    setOpen(false)
  }

  return (
    <>
      <Header title={user.username} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          placeItems: 'center',
          gap: 3,
        }}
      >
        {children.map((child) => (
          <Avatar key={child.id} component={Link} to={`/mommain/${child.id}`} sx={{ width: 120, height: 120, color: "black", textDecoration: 'none' }}>{child.username}</Avatar>
        ))}
      </Box>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          bgcolor: '#ff00ff',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          position: 'fixed',
          bottom: '10%',
          right: '1%',
          fontSize: '2rem',
          color: 'white',
          '&:hover': {
            bgcolor: 'purple',
          },
        }}
      >
        +
      </Button>
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
            width: '60%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 0, width: '100%' },
              }}
              noValidate
              autoComplete='off'
            >
              {/* 子どもをグループに追加 */}
              <TextField
                id='filled-basic'
                label='子供のEmail入力'
                variant='filled'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Box>
          </Typography>
          <CloseSmall
            sx={{
              mt: 2,
            }}
            onClick={addGroup}
          >
            追加
          </CloseSmall>
        </Box>
      </Modal>
      <Footer />
    </>
  )
}

export default Homepic
