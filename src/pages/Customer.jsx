import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { Modal, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore, AccountBox, Inbox } from '@mui/icons-material'
import { Header } from '../components/Header'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
const textstyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const Customer = () => {
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
      <Header title='会員ページ' IconNone='flase' />
      <div className='background2'>
        <div

          style={{
            transform: 'translateY(30px)',
            display: 'grid',
            gap: '20px',
          }}
        >

          <Box sx={{

          }}>
            <TextField id='standard-multiline-flexible' style={{ textstyle }} label='名前' variant='standard' value="富士川" />
            <TextField id='standard-multiline-flexible' style={{ textstyle }} label='パスワード' variant='standard' value="*********" />
            <TextField
              id='standard-multiline-flexible'
              style={{ textstyle }}
              label='新しいパスワード'
              variant='standard'

            />
            <TextField id='standard-multiline-flexible' style={{ textstyle }} label='メールアドレス' variant='standard' value="nkigvsio@gmail.com" />
            <div style={{ textAlign: 'center' }}>
              <MiddleButton onClick={handleOpen}>変更</MiddleButton>
            </div>

          </Box>
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

              <CloseSmall onClick={handleClose}>戻る</CloseSmall>
            </Box>
          </Modal>

          {/* アカウント切り替え */}
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary='アカウント一覧' />
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
            <MiddleButton onClick={createaccount}>子供用アカウント作成</MiddleButton>
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

              <TextField id='standard-multiline-flexible' style={{ textstyle }} label='ID' variant='standard' />
              <TextField id='standard-multiline-flexible' style={{ textstyle }} label='表示名' variant='standard' />

              <Box sx={{ mb: '10px', mt: '10px' }}>
                <Link to='/mommain/id'><SmallButton onClick={updopen}>作成</SmallButton></Link>
              </Box>
              <Box>
                <CloseSmall onClick={accountclose}>戻る</CloseSmall>
              </Box>
            </Box>
          </Modal>

          <div style={{ textAlign: 'center' }}>
            <SmallButton onClick={dhandelopen}>アカウント削除</SmallButton>
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
                <Link to='/'><SmallButton>削除</SmallButton></Link>
              </Box>
              <Box>
                <CloseSmall onClick={dhandleClose}>戻る</CloseSmall>
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
