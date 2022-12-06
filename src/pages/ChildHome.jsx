import { FolderSpecial } from '@mui/icons-material'
import {
  Modal,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { Header } from '../components/Header'
import { MiddleButton, SmallButton } from '../components/Buttons'
import IconTabs from '../components/IconTabs'
import { useState } from 'react'

const handleOpen = () => {
  setOpen(true)
}

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
          bgcolor: 'green',
          mx: 'auto',
          color: 'white',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Typography
          variant='h6'
          component='p'
          sx={{
            fontWeight: '600',
            p: 2,
          }}
        >
          現在のポイント
        </Typography>
        <Typography
          variant='h3'
          component='p'
          sx={{
            fontWeight: '700',
            textAlign: 'right',
            p: 2,
            '&::after': {
              content: '"pt"',
              fontSize: '1.5rem',
            },
          }}
        >
          {500}
        </Typography>
      </Box>

      <Box
        sx={{
          width: '90%',
          height: 100,
          bgcolor: 'Yellowgreen',
          mx: 'auto',
          color: 'white',
          borderRadius: '8px',
          boxShadow: 3,
          mt: '5px',
        }}
      >
        <Typography
          variant='h6'
          component='p'
          sx={{
            fontWeight: '600',
            p: 1,
          }}
        >
          所持株
        </Typography>
        <Typography
          variant='h5'
          component='p'
          sx={{
            fontWeight: '700',
            textAlign: 'right',
            p: 2,
            '&::after': {
              content: '"株"',
              // fontSize: '1.5rem',
            },
          }}
        >
          {30}
        </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <FolderSpecial
              sx={{
                mr: 2,
              }}
            />
            <ListItemText primary='交換先一覧' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box
        sx={{
          width: '90%',
          height: 150,
          mx: 'auto',
          bgcolor: 'background.paper',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <FolderSpecial
                sx={{
                  mr: 2,
                }}
              />
              <ListItemText primary='交換先一覧' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <FolderSpecial
                sx={{
                  mr: 2,
                }}
              />
              <ListItemText primary='交換先一覧' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <FolderSpecial
                sx={{
                  mr: 2,
                }}
              />
              <ListItemText primary='交換先一覧' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <FolderSpecial
                sx={{
                  mr: 2,
                }}
              />
              <ListItemText primary='交換先一覧' />
            </ListItemButton>
          </ListItem>
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
        {/* <BigButton handleOpen={handleOpen} text={'交換'} sx={{ mb: '10px' }} /> */}

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
              height: '35%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
              sx={{
                textAlign: 'center',
                mb: 2,
              }}
            >
              何個交換しますか?
            </Typography>
            <Box>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>個数</InputLabel>
                <Select sx={{}} labelId='demo-simple-select-label' id='demo-simple-select' label='count'>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 3,
                  }}
                >
                  <MiddleButton text='交換' />
                </Box>
              </FormControl>
            </Box>
          </Box>
        </Modal>
        <SmallButton text='履歴' to='/child/history' />
      </Box>
      <IconTabs />
    </>
  )
}
export default ChildHome
