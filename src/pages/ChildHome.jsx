import { FolderSpecial } from '@mui/icons-material'
import {
  Modal,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material'
import { Header } from '../components/Header'
import { BigButton, SmallButton } from '../components/Buttons'
import IconTabs from '../components/IconTabs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ChildHome = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Header title='子ども用メインページ' />
      <Box
        sx={{
          width: '90%',
          height: 150,
          bgcolor: 'black',
          mx: 'auto',
        }}
      ></Box>
      <Box
        sx={{
          width: '90%',
          height: 300,
          mx: 'auto',
          mb: 3,
          overflow: 'hidden',
        }}
      >
        <nav aria-label='main mailbox folders'>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FolderSpecial />
                </ListItemIcon>
                <ListItemText primary='交換先一覧' />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <List
          sx={{
            width: '100%',
            height: 300,
            overflow: 'auto',
            '& ul': { padding: 0 },
          }}
        >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <ul>
              {[0, 1, 2].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          mb: 1,
        }}
      >
        <BigButton text='交換' handleOpen={handleOpen} />
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
            }}
          >
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        <SmallButton text='履歴' to='/child/history' />
      </Box>
      <IconTabs />
    </>
  )
}
export default ChildHome
