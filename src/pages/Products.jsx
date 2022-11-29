import * as React from 'react'
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
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs.jsx'
import { MiddleButton, SmallButton, CloseSmall } from '../components/Buttons'
import { useState } from 'react'
import { FixedSizeList } from 'react-window'
import { Header } from '../components/Header'

const textstyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const Products = () => {
  const handleClose = () => setOpen(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const [genre, setGenre] = React.useState('')

  const handleChange = (event) => {
    setGenre(event.target.value)
  }
  const [products, setProducts] = React.useState('')

  const handlProChange = (event) => {
    setProducts(event.target.value)
  }
  return (
    <Box>
      <Header title='商品関係' />
      <div className='background2'>
        <div
          className='customerdata'
          style={{ transform: 'translateY(40px)', display: 'grid', gap: '20px', margin: '10% 0 0 0' }}
        >
          <FormControl variant='standard' style={{ textstyle }}>
            <InputLabel id='demo-simple-select-standard-label'>ジャンル</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={genre}
              onChange={handleChange}
              label='Genre'
            >
              <MenuItem value={1}>追加</MenuItem>
              <MenuItem value={2}>更新</MenuItem>
              <MenuItem value={3}>削除</MenuItem>
            </Select>
          </FormControl>

          {genre === 1 ? (
            <TextField
              id='standard-multiline-flexible'
              style={{ textstyle }}
              label='商品名'
              // onChange={(e) => handleChange(e)}
              variant='standard'
            />
          ) : (
            <FormControl variant='standard' style={{ textstyle }}>
              <InputLabel id='demo-simple-select-standard-label'>商品名</InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={products}
                onChange={handlProChange}
                label='products'
              >
                <MenuItem value={1}>お菓子１</MenuItem>
                <MenuItem value={2}>お菓子２</MenuItem>
                <MenuItem value={3}>お菓子３</MenuItem>
              </Select>
            </FormControl>
          )}

          <TextField
            id='standard-multiline-flexible'
            style={{ textstyle }}
            label='必要ポイント'
            // onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <div style={{ textAlign: 'center' }}>
            <MiddleButton text='変更' handleOpen={handleOpen} />
          </div>
          <Modal
            open={open}
            onClose={() => setopen(false)}
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
        </div>
        <div style={{ margin: '0 auto' }}>
          <IconTabs />
        </div>
      </div>
    </Box>
  )
}

export default Products
