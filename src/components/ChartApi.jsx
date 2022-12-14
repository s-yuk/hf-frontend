import { useEffect, useState } from 'react'
import AmChart from './AmChart';
import axios from 'axios';
import "../css/chart.css";
import "../css/modal.css";
import "../css/mui.css";
import IconTabs from "./IconTabs";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReplayIcon from '@mui/icons-material/Replay';
function ChartApi(props) {



  const [stockData, setStockData] = useState({})
  const [stockData1, setStockData1] = useState({})
  const [value, setValue] = React.useState(1);
  const [goukei, setGoukei] = React.useState(value);
  const [Anime, setAnime] = useState(false);
  const [BackAnime, setBackAnime] = useState(false);
  const [count, setCount] = useState(0);
  const [lastprice, setLastprice] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(value);
    var keisan = Math.ceil(value * lastprice);
    setGoukei(keisan);
  };

  const SlideAnimation = (e) => {
    setAnime(true);

  }

  const BackSlideAnimation = (e) => {
    setAnime(true);
    setBackAnime(false);
  }

  const OrderClick = () => {


  }

  const UpdateClick = () => {
    setUpdate = setUpdate + 1;
    console.log(update)

  }

  const URL = "http://api.marketstack.com/v1/eod";
  const API_KEY = "78300db2b39ecbef56da1e348c9a6e40";
  const symbols = "AAPL";


  // useEffect(async () => {

  //   const { data } = await axios.get(`${URL}?access_key=${API_KEY}&symbols=${symbols}`)

  //   // setStockData(response.data.data);
  //   // setLastprice(response.data.data[0].open);
  //   // console.log(response.data.data[0].open);
  //   // console.log(stockData);
  //   console.log(data.data[0].open);


  // }, [count]);

  useEffect(() => {

    axios.get(`${URL}?access_key=${API_KEY}&symbols=${symbols}`)
      .then(response => {


        setStockData(response.data.data);
        setLastprice(response.data.data[0].open);
        console.log(response.data.data[0].open);
        console.log(stockData);
        console.log(data.data[0].open);
      });


  }, [count]);






  function Modal({ show, setshow }) {


    const closeModal = () => {
      setshow(false);
      setAnime(false);
      setAnime(false);
    };
    if (show) {

      return (
        <div className="overlay" >
          <div className={`content-HF21 red ${Anime ? "DisplayNone" : ""}
                ${BackAnime ? "DisplayNone" : ""}
          `}>
            <a onClick={(e) => closeModal(e)}>
              <CloseIcon
                color="inherit"
                sx={{ mr: 100 }}
                onClick={(e) => closeModal(e)}
              />
            </a>
            <p className="p-sell-nuber">{goukei}</p>
            <Box sx={{ width: 300, m: "auto" }}>
              <Slider
                aria-label="Default"
                value={value}
                onChange={handleChange}
                defaultValue={1}
                valueLabelDisplay="auto"
                sx={{ m: "auto" }}
                min={1}
                max={10}
              />
              <Button variant="outlined"
                sx={{ p: " 7px 0 ", mt: 3, width: "100%" }}
                onClick={(e) => SlideAnimation(e)}
                color="inherit"
              >注文確認
              </Button>
            </Box>
          </div>
          <div className={`content-HF21 red ${Anime ? "" : "DisplayNone"}
          ${BackAnime ? "DisplayNone" : ""}
          `}>
            <a onClick={(e) => closeModal(e)}>
              <CloseIcon
                color="inherit"
                sx={{ mr: 100 }}
                onClick={(e) => BackSlideAnimation(e)}
              />
            </a>
            <p className="p-sell-nuber">{goukei}</p>
            <p className="p-sell-nuber1">

              これを<a className="a-sell-nuber1">{value}</a>こかうとこのねだんです</p>
            <Box sx={{ width: 300, m: "auto" }}>


              <Button variant="outlined"
                sx={{ p: " 7px 0 ", mt: 3, width: "100%" }}
                onClick={() => closeModal()}
                color="inherit"
              >ちゅうもん
              </Button>
            </Box>
          </div>




        </div>

      )
    } else {
      return null;
    }
  }

  function Modal1({ show1, setshow1 }) {


    const closeModal1 = () => {
      setshow1(false);
      setAnime(false);
      setAnime(false);
    };
    if (show1) {

      return (
        <div className="overlay" >
          <div className={`content-HF21  ${Anime ? "DisplayNone" : ""}
                ${BackAnime ? "DisplayNone" : ""}
          `}>
            <a onClick={(e) => closeModal1(e)}>
              <CloseIcon
                color="inherit"
                sx={{ mr: 100 }}
                onClick={(e) => closeModal1(e)}
              />
            </a>
            <p className="p-sell-nuber">{goukei}</p>
            <Box sx={{ width: 300, m: "auto" }}>
              <Slider
                aria-label="Default"
                value={value}
                onChange={handleChange}
                defaultValue={1}
                valueLabelDisplay="auto"
                sx={{ m: "auto" }}
                min={1}
                max={10}
              />
              <Button variant="outlined"
                sx={{ p: " 7px 0 ", mt: 3, width: "100%" }}
                onClick={(e) => SlideAnimation(e)}
                color="inherit"
              >注文確認
              </Button>
            </Box>
          </div>
          <div className={`content-HF21 ${Anime ? "" : "DisplayNone"}
          ${BackAnime ? "DisplayNone" : ""}
          `}>
            <a onClick={(e) => closeModal1(e)}>
              <CloseIcon
                color="inherit"
                sx={{ mr: 100 }}
                onClick={(e) => BackSlideAnimation(e)}
              />
            </a>
            <p className="p-sell-nuber">{goukei}</p>
            <p className="p-sell-nuber1">

              これを<a className="a-sell-nuber1">{value}</a>こうるとこのねだんです</p>
            <Box sx={{ width: 300, m: "auto" }}>


              <Button variant="outlined"
                sx={{ p: " 7px 0 ", mt: 3, width: "100%" }}
                onClick={() => closeModal1()}
                color="inherit"
              >ちゅうもん
              </Button>
            </Box>
          </div>

        </div>

      )
    } else {
      return null;
    }
  }





  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);

  //チャート代入
  const name = stockData

  return (
    <>

      <div className="Chart-box" id="chart">

        <h1></h1>
        <h2>{lastprice}</h2>
        <AmChart name={name} />

        <div className="date-container">

          <div className="high-box">
            <a onClick={() => setshow1(true)} >
              <p className="sell">うる</p>
              <p className="sellnuber">{lastprice}</p>
              <div className="line"></div>
            </a>
          </div>
          <div className="center-box">

          </div>
          <div className="low-box">
            <a onClick={() => setshow(true)} >
              <p className="sell">かう</p>
              <p className="sellnuber">{lastprice}</p>
              <div className="line1"></div>
            </a>
          </div>
        </div>
        <Button
          onClick={() => setCount(count + 1)}
        ><ReplayIcon /></Button>

      </div>  <Modal show={show} setshow={setshow} />
      <Modal1 show1={show1} setshow1={setshow1} />
    </>

  );
}


export default ChartApi;