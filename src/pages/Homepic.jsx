import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { CloseSmall } from '../components/Buttons'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import axios from 'axios'
const Homepic = () => {
  const [username, setUsername] = useState("")
  const [children, setChildren] = useState([]);
  const [open, setOpen] = useState(false)
  const url = "http://localhost:8080/api/user"
  const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2NAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3JlZ2lzdGVyIiwiZXhwIjoxNjcwNjg2MDE1fQ.LHKI2uLYlAG8DMuxNtCneBDz7HEDoibt1nwQyEcUT4c"
  const headers = {
    Authorization: `Bearer ${accessToken}`
  }
  const fetchUserData = async () => {
    const { data } = await axios.get(url, { headers: headers })
    setChildren(data)
  }
  useEffect(() => {
    fetchUserData();
  }, [children])

  const addMyChild = async () => {
    await axios.post(url + '/save', { username: username }, { headers: headers })
    await setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          placeItems: 'center',
          gap: 3,
        }}
      >
        {children.map(child =>
        (
          <Avatar key={child.id} component={Link} to='/mommain' sx={{ width: 120, height: 120 }} />
        )
        )}
      </Box>
      <Button
        onClick={handleOpen}
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
              <TextField id='filled-basic' label='子供のID入力' variant='filled' onChange={(e) => { setUsername(e.target.value) }} />
            </Box>
          </Typography>
          <CloseSmall onClick={addMyChild} sx={{
            mt: 2
          }}>追加</CloseSmall>
        </Box>
      </Modal>
      <Footer />
    </>
  )
}

export default Homepic
