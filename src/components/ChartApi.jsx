import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/chart.css'
import '../css/modal.css'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ReplayIcon from '@mui/icons-material/Replay'
import AmChart from './AmChart'
import { useAuth } from '../hooks/useAuth'

const ChartApi = ({ child }) => {
  const [stockData, setStockData] = useState({})
  const [value, setValue] = React.useState(`keisan`)
  const [goukei, setGoukei] = React.useState(value)
  const [Anime, setAnime] = useState(false)
  const [BackAnime, setBackAnime] = useState(false)
  const [count, setCount] = useState(0)
  const [lastprice, setLastprice] = useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
    // console.log(value);
    const keisan = Math.ceil(value * lastprice)
    setGoukei(keisan)
  }

  const SlideAnimation = (e) => {
    setAnime(true)
  }

  const BackSlideAnimation = (e) => {
    setAnime(true)
    setBackAnime(false)
  }

  const OrderClick = () => { }

  const UpdateClick = () => {
    setUpdate += 1
  }

  const URL = 'http://a1pi.marketstack.com/v1/eod'
  const API_KEY = '5936a8284593b39c6c2616291887488b'
  const symbols = 'AAPL'

  useEffect(() => {
    axios.get(`${URL}?access_key=${API_KEY}&symbols=${symbols}`).then((response) => {
      setStockData(response.data.data)
      setLastprice(response.data.data[0].open)
    })
  }, [count])

  const { token } = useAuth()
  const url = 'http://localhost:8080/api/user/2'
  const buyStock = {
    username: child.username,
    password: child.password,
    email: child.email,
    have_points: child.have_points - (lastprice * value),
    have_stock: child.have_stock + value,
    roles: [
      {
        id: 1,
      },
    ],
  }

  const sellStock = {
    username: child.username,
    password: child.password,
    email: child.email,
    have_points: child.have_points + (lastprice * value),
    have_stock: child.have_stock - value,
    roles: [
      {
        id: 1,
      },
    ],
  }
  const headers = {
    Authorization: `Bearer ${token.access_token}`,
  }

  const addMyStock = async () => {
    await axios.patch(url, buyStock, { headers: headers })
  }

  const sellMyStock = async () => {
    await axios.patch(url, sellStock, { headers: headers })
  }

  const Modal = ({ show, setshow }) => {
    const closeModal = () => {
      setshow(false)
      setAnime(false)
    }
    if (show) {
      return (
        <div className='overlay'>
          <div
            className={`content-HF21 ${Anime ? 'DisplayNone' : ''}
                ${BackAnime ? 'DisplayNone' : ''}
          `}
          >
            <a onClick={(e) => closeModal(e)}>
              <CloseIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => closeModal(e)} />
            </a>
            <p className='sell-nuber-modal'>{goukei}</p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Slider
                aria-label='Default'
                value={value}
                onChange={handleChange}
                defaultValue={1}
                valueLabelDisplay='auto'
                sx={{ m: 'auto' }}
              />
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={(e) => SlideAnimation(e)}
                color='inherit'
              >
                注文確認
              </Button>
            </Box>
          </div>
          <div
            className={`content-HF21 ${Anime ? '' : 'DisplayNone'}
          ${BackAnime ? 'DisplayNone' : ''}
          `}
          >
            <a onClick={(e) => closeModal(e)}>
              <ArrowBackIosIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => BackSlideAnimation(e)} />
            </a>
            <p className='sell-nuber-modal'>{goukei}</p>
            <p className=''>
              げんざいのもってるおかね
              <br />
              これを{value}こかうと、このねだんです
            </p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={addMyStock}
                color='inherit'
              >
                ちゅうもんしてもいいですか
              </Button>
            </Box>
          </div>
        </div>
      )
    }
    return null

  }

  const [show, setshow] = useState(false)

  // チャート代入
  const name = stockData

  return (
    <>
      <div className='Chart-box' id='chart'>
        <h1 />
        <h2>{lastprice}</h2>
        <AmChart name={name} />

        <div className='date-container'>
          <div className='high-box'>
            <a onClick={() => setshow(true)}>
              <p className='sell'>うる</p>
              <p className='sellnuber'>{lastprice}</p>
              <div className='line' />
            </a>
          </div>
          <div className='center-box' />
          <div className='low-box'>
            <a onClick={() => setshow(true)}>
              <p className='sell'>かう</p>
              <p className='sellnuber'>{lastprice}</p>
              <div className='line1' />
            </a>
          </div>
        </div>

        <Button onClick={() => setCount(count + 1)}>
          <ReplayIcon />
        </Button>
      </div>{' '}
      <Modal show={show} setshow={setshow} />
    </>
  )
}

export default ChartApi
