import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { Modal, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore, AccountBox, Inbox } from '@mui/icons-material'
import { Header } from '../components/Header'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { Footer } from '../components/Footer'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const textstyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const Customer = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies("[token]")
  const navigate = useNavigate()

  const fetchUser = async () => {
    const { data } = await axios.get('http://localhost:8080/api/user', { headers: { Authorization: cookies.token } })

    setUsername(data.username)
    setEmail(data.email)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const updateUser = async () => {
    await axios.put('http://localhost:8080/api/user', {
      username: username,
      email: email,
      password: password,
      newPassword: newPassword
    }, { headers: { Authorization: cookies.token } })
    handleOpen()
  }

  const deleteUser = async () => {
    await axios.delete('http://localhost:8080/api/user', { headers: { Authorization: cookies.token } })
    removeCookie("token")
    navigate("/")
  }

  const handleClose = () => setUpdopen(false)
  const dhandleClose = () => setDelopen(false)
  const accountclose = () => setNewaccount(false)

  const [updopen, setUpdopen] = useState(false)
  const handleOpen = () => {
    setUpdopen(true)
  }

  const [delopen, setDelopen] = useState(false)

  const dhandelopen = () => {
    setDelopen(true)
  }
  const [acountopen, setAcountopen] = useState(false)

  const handleClick = () => {
    setAcountopen(!acountopen)
  }

  const [newaccount, setNewaccount] = useState(false)

  const createaccount = () => {
    setNewaccount(true)
  }
  return (
    <Box>
      <Header title='???????????????' IconNone='flase' />
      <div className='background2'>
        <div
          className='customerdata'
          style={{
            transform: 'translateY(30px)',
            display: 'grid',
            gap: '20px',
          }}
        >
          <TextField style={{ textstyle }} label='??????' value={username} variant='standard' onChange={(e) => setUsername(e.target.value)} />
          <TextField style={{ textstyle }} type="password" label='???????????????' variant='standard' onChange={(e) => setPassword(e.target.value)} />
          <TextField
            style={{ textstyle }}
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            label='????????????????????????'
            variant='standard'
          />
          <TextField style={{ textstyle }} label='?????????????????????' variant='standard' value={email} onChange={(e) => setEmail(e.target.value)} />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton onClick={updateUser}>??????</MiddleButton>
          </div>
          <Modal
            open={updopen}
            onClose={() => setUpdopen(false)}
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
                height: '30%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: '5px' }}>
                ???????????????????????????
              </Typography>

              <CloseSmall onClick={handleClose}>??????</CloseSmall>
            </Box>
          </Modal>

          {/* ??????????????????????????? */}
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary='?????????????????????' />
              {acountopen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={acountopen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary='Starred' />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary='Starred' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary='Starred' />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <div style={{ textAlign: 'center' }}>
            <MiddleButton onClick={createaccount}>??????????????????????????????</MiddleButton>
          </div>
          <Modal
            open={newaccount}
            onClose={() => setNewaccount(false)}
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
                height: '50%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: '10px' }}>
                ID???????????? <br />
                ???????????????????????????
              </Typography>

              <TextField style={{ textstyle }} label='ID' variant='standard' />
              <TextField style={{ textstyle }} label='?????????' variant='standard' />

              <Box sx={{ mb: '10px', mt: '10px' }}>
                <SmallButton onClick={updopen}>??????</SmallButton>
              </Box>
              <Box>
                <CloseSmall onClick={accountclose}>??????</CloseSmall>
              </Box>
            </Box>
          </Modal>

          <div style={{ textAlign: 'center' }}>
            <SmallButton onClick={dhandelopen}>?????????????????????</SmallButton>
          </div>
          <Modal
            open={delopen}
            onClose={() => setDelopen(false)}
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
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: '10px' }}>
                ??????????????????????????????
              </Typography>

              <Box sx={{ mb: '10px' }}>
                <SmallButton onClick={deleteUser}>??????</SmallButton>
              </Box>
              <Box>
                <CloseSmall onClick={dhandleClose}>??????</CloseSmall>
              </Box>
            </Box>
          </Modal>
        </div>
        <div style={{ margin: '0 auto' }}>
          <Footer />
        </div>
        <Box sx={{ m: '100px' }} />
      </div>
    </Box>
  )
}

export default Customer
