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
  const candleData = [
    {
      date: '2018-08-01',
      open: '136.65',
      high: '136.96',
      low: '134.15',
      close: '136.49',
    },
    {
      date: '2018-08-02',
      open: 149.5,
      high: 149.9692,
      low: 144.24,
      close: 145.47,
    },
    {
      date: '2018-08-03',
      open: 142.7,
      high: 144.5,
      low: 141.06,
      close: 144.49,
    },
    {
      date: '2018-08-04',
      open: 142.34,
      high: 145.57,
      low: 140.9,
      close: 142.16,
    },
    {
      date: '2018-08-05',
      open: 142.36,
      high: 143.52,
      low: 141.1,
      close: 142.65,
    },
    {
      date: '2018-08-06',
      open: 142.19,
      high: 143.37,
      low: 140,
      close: 140.94,
    },
    {
      date: '2018-08-07',
      open: 147.075,
      high: 147.3,
      low: 141.92,
      close: 142.91,
    },
    {
      date: '2018-08-08',
      open: 147.77,
      high: 150.9199,
      low: 145.77,
      close: 146.63,
    },
    {
      date: '2018-08-09',
      open: 145.96,
      high: 148,
      low: 145.65,
      close: 147.81,
    },
    {
      date: '2018-08-10',
      open: 148.21,
      high: 149.13,
      low: 146.61,
      close: 148.31,
    },
    {
      date: '2018-08-11',
      open: 141.395,
      high: 148.72,
      low: 140.55,
      close: 148.03,
    },
    {
      date: '2018-08-12',
      open: 144.29,
      high: 144.81,
      low: 140.355,
      close: 141.17,
    },
    {
      date: '2018-08-13',
      open: 145.14,
      high: 146.64,
      low: 143.38,
      close: 144.22,
    },
    {
      date: '2018-08-14',
      open: 148.31,
      high: 148.88,
      low: 147.12,
      close: 148.11,
    },
    {
      date: '2018-08-15',
      open: 149.45,
      high: 151.83,
      low: 149.34,
      close: 151.07,
    },
    {
      date: '2018-08-16',
      open: 148.13,
      high: 150.42,
      low: 146.925,
      close: 150.18,
    },
    {
      date: '2018-08-17',
      open: 150.16,
      high: 150.37,
      low: 147.715,
      close: 148.01,
    },
    {
      date: '2018-08-18',
      open: 152.31,
      high: 152.7,
      low: 149.97,
      close: 151.29,
    },
    {
      date: '2018-08-19',
      open: 146.43,
      high: 151.48,
      low: 146.15,
      close: 150.72,
    },
    {
      date: '2018-08-20',
      open: 149.13,
      high: 149.87,
      low: 147.29,
      close: 148.79,
    },
    {
      date: '2018-08-21',
      open: 152.215,
      high: 153.59,
      low: 148.5613,
      close: 150.0328,
    },
    {
      date: '2018-08-22',
      open: 148.97,
      high: 150.28,
      low: 147.43,
      close: 148.28,
    },
    {
      date: '2018-08-23',
      open: 145.82,
      high: 150.01,
      low: 144.37,
      close: 149.7,
    },
    {
      date: '2018-08-24',
      open: 141.24,
      high: 146.87,
      low: 139.5,
      close: 146.87,
    },
    {
      date: '2018-08-25',
      open: 138.5,
      high: 138.55,
      low: 134.5933,
      close: 134.87,
    },
    {
      date: '2018-08-26',
      open: 140.41,
      high: 141.43,
      low: 137.49,
      close: 139.5,
    },
    {
      date: '2018-08-27',
      open: 137.11,
      high: 139.145,
      low: 135.671,
      close: 138.9228,
    },
    {
      date: '2018-08-28',
      open: 142.09,
      high: 142.67,
      low: 134.38,
      close: 138.38,
    },
    {
      date: '2018-08-29',
      open: 142.06,
      high: 142.8,
      low: 138.75,
      close: 138.88,
    },
    {
      date: '2018-08-30',
      open: 148.95,
      high: 152.17,
      low: 145,
      close: 145.03,
    },
  ]

  const [stockData, setStockData] = useState({})
  const [value, setValue] = React.useState(1)
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

  const OrderClick = () => {}

  const UpdateClick = () => {
    setUpdate += 1
  }

  const URL = 'http://a1pi.marketstack.com/v1/eod'
  const API_KEY = '78300db2b39ecbef56da1e348c9a6e40'
  const symbols = 'AAPL'

  useEffect(() => {
    axios.get(`${URL}?access_key=${API_KEY}&symbols=${symbols}`).then((response) => {
      setStockData(response.data.data)
      setLastprice(148.95)
      // setLastprice(response.data.data[0].open)
    })
  }, [count])

  const { token } = useAuth()
  const url = 'http://localhost:8080/api/user/2'
  const buyStock = {
    username: child.username,
    password: child.password,
    email: child.email,
    have_points: child.have_points - 148.95 * value,
    have_stocks: child.have_stocks + value,
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
    have_points: child.have_points + 148.95 * value,
    have_stocks: child.have_stocks - value,
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
    setAnime(true)
  }

  const sellMyStock = async () => {
    await axios.patch(url, sellStock, { headers: headers })
    setAnime(true)
  }

  const Modal = ({ show, setshow }) => {
    const closeModal = () => {
      setshow(false)
      setAnime(false)
      setAnime(false)
    }
    if (show) {
      return (
        <div className='overlay'>
          <div
            className={`content-HF21 red  ${Anime ? 'DisplayNone' : ''}
                ${BackAnime ? 'DisplayNone' : ''}
          `}
          >
            <a onClick={(e) => closeModal(e)}>
              <CloseIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => closeModal(e)} />
            </a>
            <p className='p-sell-nuber-modal'>{148 * value}</p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Slider
                aria-label='Default'
                value={value}
                onChange={handleChange}
                defaultValue={1}
                valueLabelDisplay='auto'
                sx={{ m: 'auto' }}
                min={1}
                max={10}
              />
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={(e) => SlideAnimation(e)}
                color='inherit'
              >
                ちゅうもんしていいですか？
              </Button>
            </Box>
          </div>
          <div
            className={`content-HF21 red ${Anime ? '' : 'DisplayNone'}
          ${BackAnime ? 'DisplayNone' : ''}
          `}
          >
            <a onClick={(e) => closeModal(e)}>
              <CloseIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => BackSlideAnimation(e)} />
            </a>
            <p className='p-sell-nuber-modal'>{148 * value}</p>
            <p className='p-sell-nuber1'>
              これを<a className='a-sell-nuber1'>{value}</a>こかうとこのねだんです
            </p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <a onClick={(e) => closeModal(e)}>
                <Button
                  variant='outlined'
                  sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                  onClick={addMyStock}
                  color='inherit'
                >
                  ちゅうもん
                </Button>
              </a>
            </Box>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  function Modal1({ show1, setshow1 }) {
    const closeModal1 = () => {
      setshow1(false)
      setAnime(false)
      setAnime(false)
    }
    if (show1) {
      return (
        <div className='overlay'>
          <div
            className={`content-HF21  ${Anime ? 'DisplayNone' : ''}
                ${BackAnime ? 'DisplayNone' : ''}
          `}
          >
            <a onClick={(e) => closeModal1(e)}>
              <CloseIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => closeModal1(e)} />
            </a>
            <p className='p-sell-nuber-modal'>{148 * value}</p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Slider
                aria-label='Default'
                value={value}
                onChange={handleChange}
                defaultValue={1}
                valueLabelDisplay='auto'
                sx={{ m: 'auto' }}
                min={1}
                max={10}
              />
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={sellMyStock}
                color='inherit'
              >
                ちゅうもんしてもいいですか
              </Button>
            </Box>
          </div>
          <div
            className={`content-HF21 ${Anime ? '' : 'DisplayNone'}
          ${BackAnime ? 'DisplayNone' : ''}
          `}
          >
            <a onClick={(e) => closeModal1(e)}>
              <CloseIcon color='inherit' sx={{ mr: 100 }} />
            </a>
            <p className='p-sell-nuber-modal'>{148 * value}</p>
            <p className='p-sell-nuber1'>
              これを<a className='a-sell-nuber1'>{value}</a>こうるとこのねだんです
            </p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={() => closeModal1()}
                color='inherit'
              >
                ちゅうもん
              </Button>
            </Box>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  const [show, setshow] = useState(false)
  const [show1, setshow1] = useState(false)

  // チャート代入
  const name = candleData

  return (
    <>
      <div className='Chart-box' id='chart'>
        <h1 />
        <h2>{lastprice}</h2>
        <AmChart name={name} />

        <div className='date-container'>
          <div className='high-box'>
            <a onClick={() => setshow1(true)}>
              <p className='sell'>うる</p>
              <p className='sellnuber'>{148.9}</p>
              <div className='line' />
            </a>
          </div>
          <div className='center-box' />
          <div className='low-box'>
            <a onClick={() => setshow(true)}>
              <p className='sell'>かう</p>
              <p className='sellnuber'>{148.95}</p>
              <div className='line1' />
            </a>
          </div>
        </div>

        <Button onClick={() => setCount(count + 1)}>
          <ReplayIcon />
        </Button>
      </div>{' '}
      <Modal show={show} setshow={setshow} />
      <Modal1 show1={show1} setshow1={setshow1} />
    </>
  )
}

export default ChartApi
