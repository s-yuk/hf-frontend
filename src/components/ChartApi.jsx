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
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4lang_ja_JP from '@amcharts/amcharts4/lang/ja_JP'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import AmChart from './AmChart'
import { useCookies } from 'react-cookie'

const ChartApi = () => {
  const [cookies, setCookie, removeCookie] = useCookies("[token]");
  const [stockData, setStockData] = useState({})
  const [value, setValue] = React.useState(1)
  const [goukei, setGoukei] = React.useState(value)
  const [Anime, setAnime] = useState(false)
  const [BackAnime, setBackAnime] = useState(false)
  const [count, setCount] = useState(0)
  const [lastprice, setLastprice] = useState('')
  const [user, setUser] = useState([])

  const fetchUser = async () => {
    const { data } = await axios.get('http://localhost:8080/api/user', { headers: { Authorization: cookies.token } })
    setUser(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])


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

  const API_URL = 'http://api.marketstack.com/v1/eod'
  const API_KEY = '0279402a08ae7485fef9bb6f0960422d'
  const symbols = 'AAPL'

  useEffect(() => {

    axios
      .get(`${API_URL}?access_key=${API_KEY}&symbols=${symbols}`)
      .then((response) => {
        setStockData(response.data)
        setLastprice(response.data.data[0].open)
        console.log(response.data.data[0].open)
        console.log(response.data)

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
          'Open: [bold]{openValueY.value}[/]\nLow: [bold]{lowValueY.value}[/]\nHigh: [bold]{highValueY.value}[/]\nClose: [bold]{valueY.value}[/]'

        chart.cursor = new am4charts.XYCursor()

        const scrollbarX = new am4charts.XYChartScrollbar()
        scrollbarX.series.push(series)

        chart.dateFormatter.language = new am4core.Language()
        chart.dateFormatter.language.locale = am4lang_ja_JP
      })
      .catch((err) => console.error(err))
  }, [count])


  const Modal = ({ show, setshow }) => {

    const addStock = async () => {
      await axios.put('http://localhost:8080/api/user/stock', {
        havePoint: parseInt(user.havePoint, 10) - parseInt(148 * value, 10),
        haveStock: parseInt(user.haveStock, 10) + parseInt(value, 10)
      }, { headers: { Authorization: cookies.token } })
    }

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
            <p className='p-sell-number-modal'>{148 * value}</p>
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
                ???????????????????????????????????????
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
            <p className='p-sell-number-modal'>{148 * value}</p>
            <p className='p-sell-number1'>
              ?????????<a className='a-sell-number1'>{value}</a>?????????????????????????????????
            </p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <a onClick={(e) => closeModal(e)}>
                <Button
                  variant='outlined'
                  sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                  onClick={addStock}
                  color='inherit'
                >
                  ???????????????
                </Button>
              </a>
            </Box>
          </div>
        </div>
      )
    }
    return null

  }

  const Modal1 = ({ show1, setshow1 }) => {
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
            <p className='p-sell-number-modal'>{148 * value}</p>
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
                ???????????????????????????????????????
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
            <p className='p-sell-number-modal'>{148 * value}</p>
            <p className='p-sell-number1'>
              ?????????<a className='a-sell-number1'>{value}</a>?????????????????????????????????
            </p>
            <Box sx={{ width: 300, m: 'auto' }}>
              <Button
                variant='outlined'
                sx={{ p: ' 7px 0 ', mt: 3, width: '100%' }}
                onClick={() => closeModal1()}
                color='inherit'
              >
                ???????????????
              </Button>
            </Box>
          </div>
        </div>
      )
    }
    return null

  }

  const [show, setshow] = useState(false)
  const [show1, setshow1] = useState(false)

  // ??????????????????
  const name = stockData

  return (
    <>
      <div className='Chart-box' id='chart'>
        <h1 />
        <h2>{lastprice}</h2>
        <div id='chartdiv' style={{ width: '100%', height: '95%' }} />

        <div className='data-container'>
          <div className='high-box'>
            <a onClick={() => setshow1(true)}>
              <p className='sell'>??????</p>
              <p className='sellnumber'>{lastprice + 0.1}</p>
              <div className='line' />
            </a>
          </div>
          <div className='center-box' />
          <div className='low-box'>
            <a onClick={() => setshow(true)}>
              <p className='sell'>??????</p>
              <p className='sellnumber'>{lastprice - 0.1}</p>
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
