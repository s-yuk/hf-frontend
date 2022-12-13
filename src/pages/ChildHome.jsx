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
import { useEffect, useState } from 'react'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { MiddleButton, SmallButton } from '../components/Buttons'
import { ChildFooter } from '../components/Footer'
import { useAuth } from '../hooks/useAuth'

function ChildHome() {
  const { token } = useAuth()
  const [childInfo, setChildInfo] = useState([])
  const [products, setProducts] = useState([])

  const BASE_URL = 'http://localhost:8080/api'
  const headers = {
    Authorization: `Bearer ${token.access_token}`,
  }

  const fetchProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/product`, { headers })
    setProducts(data)
  }
  useEffect(() => {
    fetchProducts()
    fetchUser()
  }, [childInfo, products])

  const fetchUser = async () => {
    const { data } = await axios.get(`${BASE_URL}/user/2`, { headers })
    setChildInfo(data)
  }

  const buyProducts = async (necessary_points) => {
    await axios.patch(
      `${BASE_URL}/user/2`,
      {
        id: 2,
        username: childInfo.username,
        email: childInfo.email,
        password: childInfo.password,
        have_points: childInfo.have_points - necessary_points,
      },
      { headers }
    )
    setOpen(false)
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <Header title={childInfo.username} />
      <Box
        sx={{
          width: '90%',
          height: 130,
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
          もっているポイント
        </Typography>
        <Typography
          variant='h3'
          component='p'
          sx={{
            fontWeight: '700',
            textAlign: 'right',
            p: 1,
            '&::after': {
              content: '"pt"',
              fontSize: '1.5rem',
            },
          }}
        >
          {childInfo.have_points ? childInfo.have_points : 0}
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
          持っている券（けん）
          <LocalActivityIcon sx={{ fontSize: '30px', p: '2' }} />
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
            <ListItemText primary='しょうひん' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box
        sx={{
          width: '90%',
          height: 150,
          mx: 'auto',
          mb: 3,
          bgcolor: 'background.paper',
          overflow: 'scroll',
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setOpen(true)}>
                  <FolderSpecial
                    sx={{
                      mr: 2,
                    }}
                  />
                  <ListItemText primary={product.product_name} />
                </ListItemButton>
              </ListItem>
            </List>
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
                      <MenuItem>1</MenuItem>
                      <MenuItem>2</MenuItem>
                      <MenuItem>3</MenuItem>
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
                      <MiddleButton onClick={() => buyProducts(product.necessary_points)}>こうかんする</MiddleButton>
                    </Box>
                  </FormControl>
                </Box>
              </Box>
            </Modal>
          </div>
        ))}
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
        <SmallButton component={Link} to='/child/history'>
          履歴
        </SmallButton>
      </Box>
      <ChildFooter />
    </>
  )
}
export default ChildHome
