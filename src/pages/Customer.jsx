import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import IconTabs from '../components/IconTabs.jsx'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Modal, Box, Typography, Button } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { create } from '@mui/material/styles/createTransitions.js'
import { Footer } from '../components/Footer'

const textstyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const ChildCustomer = () => {
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
      <Header title='会員ページ' />
      <div className='background2'>
        <div
          className='customerdata'
          style={{
            transform: 'translateY(30px)',
            display: 'grid',
            gap: '20px',
          }}
        >
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='名前'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='パスワード'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='新しいパスワード'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='メールアドレス'
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton text='変更' handleOpen={handleOpen} />
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
                変更完了しました。
              </Typography>

              <CloseSmall text='戻る' handleClose={handleClose}></CloseSmall>
            </Box>
          </Modal>

          {/* アカウント切り替え*/}
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='アカウント一覧' />
              {acountopen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={acountopen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Starred' />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Starred' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Starred' />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <div style={{ textAlign: 'center' }}>
            <MiddleButton text='子供用アカウント作成' handleOpen={createaccount} sx={{}} />
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
                IDと名前を <br />
                入力してください。
              </Typography>

              <TextField
                id='standard-multiline-flexible'
                style={{ textstyle }}
                label='ID'
                onChange={(e) => handleChange(e)}
                variant='standard'
              />
              <TextField
                id='standard-multiline-flexible'
                style={{ textstyle }}
                label='表示名'
                onChange={(e) => handleChange(e)}
                variant='standard'
              />

              <Box sx={{ mb: '10px', mt: '10px' }}>
                <SmallButton text='作成' handleOpen={updopen}></SmallButton>
              </Box>
              <Box>
                <CloseSmall text='戻る' handleClose={accountclose}></CloseSmall>
              </Box>
            </Box>
          </Modal>

          <div style={{ textAlign: 'center' }}>
            <SmallButton text='アカウント削除' handleOpen={dhandelopen} sx={{}} />
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
                本当に削除しますか？
              </Typography>

              <Box sx={{ mb: '10px' }}>
                <SmallButton text='削除' to={'/login'}></SmallButton>
              </Box>
              <Box>
                <CloseSmall text='戻る' handleClose={dhandleClose}></CloseSmall>
              </Box>
            </Box>
          </Modal>
        </div>
        <div style={{ margin: '0 auto' }}>
          <Footer />
        </div>
        <Box sx={{ m: '100px' }}></Box>
      </div>
    </Box>
  )
}

export default ChildCustomer
