import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/chart.css'
import '../css/modal.css'
import '../css/mui.css'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ReplayIcon from '@mui/icons-material/Replay'
import { useAuth } from '../hooks/useAuth'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4lang_ja_JP from '@amcharts/amcharts4/lang/ja_JP'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
am4core.useTheme(am4themes_animated);

const ChartApi = ({ child }) => {

  const [stockData, setStockData] = useState({})
  const [value, setValue] = useState(1)
  const [goukei, setGoukei] = useState(value)
  const [Anime, setAnime] = useState(false)
  const [BackAnime, setBackAnime] = useState(true)
  const [count, setCount] = useState(0)
  const [lastprice, setLastprice] = useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
    // console.log(value);
    const keisan = Math.ceil(value * lastprice)
    setGoukei(keisan)
  }

  const SlideAnimation = () => {
    setAnime(true)
    setBackAnime(false)
  }

  const SlideAnimation1 = () => {
    setAnime(false)
    setBackAnime(true)
  }




  const API_URL = "http://api.marketstack.com/v1/eod";
  const API_KEY = "c244fefb006b4ac43c556acb63267065";
  const symbols = "AAPL";

  useEffect(() => {
    axios.get(`${API_URL}?access_key=${API_KEY}&symbols=${symbols}`)
      .then(response => {
        setStockData(response.data);
        setLastprice(response.data.data[0].open);
        console.log(response.data.data[0].open);
        console.log(response.data);


        const chart = am4core.create('chartdiv', am4charts.XYChart)
        chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd'
        chart.paddingRight = 20

        chart.data = response.data.data

        const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
        dateAxis.renderer.grid.template.location = 0
        dateAxis.renderer.minGridDistance = 60

        dateAxis.skipEmptyPeriods = true

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.tooltip.disabled = true
        valueAxis.renderer.minWidth = 35

        const series = chart.series.push(new am4charts.CandlestickSeries())
        series.dataFields.dateX = 'date'
        series.dataFields.valueY = 'close'
        series.dataFields.openValueY = 'open'
        series.dataFields.lowValueY = 'low'
        series.dataFields.highValueY = 'high'

        series.tooltipText =
          'はじまり: [bold]{openValueY.value}[/]\nした: [bold]{lowValueY.value}[/]\nうえ: [bold]{highValueY.value}[/]\nおわり: [bold]{valueY.value}[/]'

        chart.cursor = new am4charts.XYCursor()

        const scrollbarX = new am4charts.XYChartScrollbar()
        scrollbarX.series.push(series)

        chart.dateFormatter.language = new am4core.Language()
        chart.dateFormatter.language.locale = am4lang_ja_JP

      })
      .catch(err => console.error(err));

  }, [count]);

  const { token } = useAuth()
  const url = 'http://localhost:8080/api/user/2'
  const buyStock = {
    username: child.username,
    password: child.password,
    email: child.email,
    have_points: child.have_points - lastprice * value,
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
    have_points: child.have_points + lastprice * value,
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
      setValue(1)
    }
    if (show) {
      return (
        <div className='overlay'>
          <div className={`content red ${Anime ? 'slide-left' : ''} 
           ${BackAnime ? '' : ''}
          
          `}>
            <a >
              <CloseIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => closeModal(e)} />
            </a>
            <p className='sell-number'>{lastprice * value}</p>
            <Box sx={{
              width: '100%',
              m: 'auto',
              pr: 2,
              pl: 2
            }}>
              <Slider
                defaultValue={value}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChange}
                sx={{ m: 'auto' }}
                min={1}
                max={20}
              />
              <div className='flex'>
                <div className='money'>
                  <p className='red'>もってるおかね&emsp;&emsp;&emsp;&emsp;10000円</p>
                </div>

              </div>
              <Button
                variant='contained'
                sx={{
                  p: ' 12px 0 ',
                  mt: 3,
                  width: '100%',
                  m: ' 20px auto auto auto'
                }}
                onClick={(e) => SlideAnimation(e)}
                color='error'
              >
                かう
              </Button>
            </Box>
          </div>


          <div className={`content1 red ${Anime ? '' : 'slide-right'}
           ${BackAnime ? '' : ''}
          `}>
            <a>
              <ArrowBackIosNewIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => SlideAnimation1(e)} />
            </a>

            <Box sx={{
              width: '100%',
              m: 'auto',
              pr: 2,
              pl: 2
            }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 95, m: 'auto', color: 'green', display: 'flex' }} />

              <div className='flex'>
                <div className='money'>
                  <span className='font-Big'>購入完了</span>
                  <p className='font-Min red'>のこりのおかね&emsp;&emsp;&emsp;&emsp;10000円 <br />
                    のこりのおかね&emsp;&emsp;&emsp;&emsp;10000円
                  </p>
                  <p className='font-Min'></p>
                </div>

              </div>
              <Button
                variant='contained'
                sx={{
                  p: ' 12px 0 ',
                  mt: 3,
                  width: '100%',
                  m: ' 20px auto auto auto'
                }}
                color='error'
                onClick={(e) => closeModal(e)}
              >
                とじる
              </Button>
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
          <div className={`content ${Anime ? 'slide-left' : ''} 
           ${BackAnime ? 'DisplayNone' : ''}
          
          `}>
            <a>
              <CloseIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => closeModal1(e)} />
            </a>
            <p className='sell-number'>{lastprice * value}</p>
            <Box sx={{
              width: '100%',
              m: 'auto',
              pr: 2,
              pl: 2
            }}>
              <Slider
                defaultValue={value}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChange}
                sx={{ m: 'auto' }}
                min={1}
                max={20}
              />
              <div className='flex'>
                <div className='money'>
                  <p className=''>もってるおかね&emsp;&emsp;&emsp;&emsp;10000円</p>
                </div>

              </div>
              <Button
                variant='contained'
                sx={{
                  p: ' 12px 0 ',
                  mt: 3,
                  width: '100%',
                  m: ' auto'
                }}
                onClick={(e) => SlideAnimation(e)}
                color='primary'
              >
                うる
              </Button>
            </Box>
          </div>


          <div className={`content1 ${Anime ? '' : 'slide-right'}
           ${BackAnime ? 'DisplayNone' : ''}
          `}>
            <a>
              <ArrowBackIosNewIcon color='inherit' sx={{ mr: 100 }} onClick={(e) => SlideAnimation1(e)} />
            </a>

            <Box sx={{
              width: '100%',
              m: 'auto',
              pr: 2,
              pl: 2
            }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 95, m: 'auto', color: 'green', display: 'flex' }} />

              <div className='flex'>
                <div className='money'>
                  <span className='font-Big'>購入完了</span>
                  <p className='font-Min'>のこりのおかね&emsp;&emsp;&emsp;&emsp;10000円 <br />
                    のこりのおかね&emsp;&emsp;&emsp;&emsp;10000円
                  </p>
                  <p className='font-Min'></p>
                </div>

              </div>
              <Button
                variant='contained'
                sx={{
                  p: ' 12px 0 ',
                  mt: 3,
                  width: '100%',
                  m: ' auto'
                }}
                color='primary'
                onClick={(e) => closeModal1(e)}
              >
                とじる
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
  const name = stockData

  return (
    <>

      <div className='wrapper' id='chart'>
        <h1 />
        <div className='flex'>
          <Button onClick={() => setCount(count + 1)}>
            <ReplayIcon />
          </Button>
          <h2>{lastprice}</h2>
        </div>


        <div id='chartdiv' style={{ width: '100%', height: '95%' }} />
        <div className='trade-container'>
          <div className='high-box'>
            <a onClick={() => setshow1(true)}>
              <p className='sell'>うる</p>
              <p className='sellnumber'>{lastprice}</p>
              <div className='line' />
            </a>
          </div>
          <div className='center-box' />
          <div className='low-box'>
            <a onClick={() => setshow(true)}>
              <p className='buy'>かう</p>
              <p className='sellnumber'>{lastprice}</p>
              <div className='line1' />
            </a>
          </div>
        </div>


      </div>{' '}
      <Modal show={show} setshow={setshow} />
      <Modal1 show1={show1} setshow1={setshow1} />
    </>
  )
}

export default ChartApi
