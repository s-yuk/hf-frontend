import { useEffect, useState } from 'react'
import AmChart from './AmChart'
import axios from 'axios'
import '../css/chart.css'
import '../css/modal.css'
import Button from '@mui/material/Button'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function ChartApi(props) {
  const [stockData, setStockData] = useState({})
  const [stockPrice, setStockPrice] = useState({})
  const [value, setValue] = React.useState(30)
  const [goukei, setGoukei] = React.useState(value)
  const [Anime, setAnime] = useState(false)
  const [BackAnime, setBackAnime] = useState(false)

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

  const URL = 'http://api.marketstack.com/v1/eod'
  const API_KEY = 'ab689840193aa0a2037cbf0c70d3e4c6'
  const symbols = 'AAPL'
  const close = []
  const low = []
  const date = []
  const open = []
  const high = []

  useEffect(() => {
    axios.get(`${URL}?access_key=${API_KEY}&symbols=${symbols}`).then((response) => {
      setStockData(response.data.data)

      console.log(stockData)
    })
  }, [])

  const chart = [
    {
      date: stockPrice.date,
      open: stockPrice.open,
      high: stockPrice.high,
      low: stockPrice.low,
      close: stockPrice.close,
    },
    {
      date: '2022-08-01',
      open: stockPrice.open,
      high: stockPrice.high,
      low: stockPrice.low,
      close: stockPrice.close,
    },
  ]
  const newchart = chart

  const candleData = [
    {
      date: '2018-08-01',
      open: '136.65',
      high: '136.96',
      low: '134.15',
      close: '136.49',
    },
  ]

  const aryResult = stockData.map((value) => value.open)

  const lastprice = aryResult.slice(-1)[0]

  function Modal({ show, setshow }) {
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
            <p className=''>これをかいますか</p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={() => OrderClick()}
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
      </div>{' '}
      <Modal show={show} setshow={setshow} />
    </>
  )
}

export default ChartApi
