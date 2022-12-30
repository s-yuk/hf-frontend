import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { MiddleButton } from '../components/Buttons'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import useNotification from '../components/Toast'
import 'react-toastify/dist/ReactToastify.css'

const textStyle = {
  paddingRight: '200px',
  margin: '0 0 0 10px',
}

const Products = () => {
  const { saved, updated, deleted } = useNotification()

  const handleClick = async () => {
    // await axios.post(url, data, { headers })
    // setOpen(false)
    saved()
  }

  const [genre, setGenre] = useState(1)
  const handleChange = (event) => {
    setGenre(event.target.value)
  }
  const [products, setProducts] = useState('')
  const handleProChange = (event) => {
    setProducts(event.target.value)
  }
  return (
    <Box>
      <Header title='商品関係' />
      <div className='background2'>
        <div
          className='customerdata'
          style={{
            transform: 'translateY(40px)',
            display: 'grid',
            gap: '20px',
          }}
        >
          <FormControl variant='standard' style={{ textStyle }}>
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
            <TextField id='standard-multiline-flexible' style={{ textStyle }} label='商品名' variant='standard' />
          ) : (
            <FormControl variant='standard' style={{ textStyle }}>
              <InputLabel id='demo-simple-select-standard-label'>商品名</InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={products}
                onChange={handleProChange}
                label='products'
              >
                <MenuItem value={1} selected>
                  お菓子１
                </MenuItem>
                <MenuItem value={2}>お菓子２</MenuItem>
                <MenuItem value={3}>お菓子３</MenuItem>
              </Select>
            </FormControl>
          )}

          <TextField id='standard-multiline-flexible' style={{ textStyle }} label='必要ポイント' variant='standard' />
          {genre === 1 ? (
            <div style={{ textAlign: 'center' }}>
              <MiddleButton onClick={handleClick}>追加</MiddleButton>
            </div>
          ) : genre === 2 ? (
            <div style={{ textAlign: 'center' }}>
              <MiddleButton onClick={updated}>更新</MiddleButton>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <MiddleButton onClick={deleted}>削除</MiddleButton>
            </div>
          )}
        </div>
        <ToastContainer />
        <Footer />
      </div>
    </Box>
  )
}

export default Products
