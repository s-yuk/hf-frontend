import { Link } from "react-router-dom";
import icon from "./images/icon.png";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import  "./css/login.css";
import  "./css/modal.css";
import  "./css/icons.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import IconTabs from "./components/IconTabs";



const InputCheck = () => {


  const [check ,setcheck] = useState(false);

  function Modal(props){
    if (props.check) {
      return (
      <div className="overlay" >
        <div className="content">
        
        <CheckCircleOutlineIcon 
        sx={{ fontSize: 110 , m: "0 60px 0 60px " }}
        color="success"
         />
        
         <p>登録してもいいですか</p>
        <Link to={`/`}>
          <p><Button variant="contained"
          sx={
            {  p: " 7px 40px 7px 40px " }
        }
          >完　了</Button></p>
        </Link>
          
          
        </div>
      </div>
    )
  }else {
    return null;
  }
}

  
  return (
    <>
  <header></header>
  <main></main>
  <div class="background1">
  
    <div className="input-text-login">
      
      <TextField 
      id="outlined-basic"
      label="メール" 
      variant="outlined" 
      sx={{ width: 300}}
      disabled
      defaultValue="入力内容"
      />
      <Box sx={{ m: 5 }} />
      <TextField id="outlined-basic" 
      label="パスワード"
      variant="outlined"
      sx={{ width: 300}}
      disabled
      defaultValue="入力内容"
       />
       
    </div>
    {/* <Link to={`/MemberHome/`}> */}
    <a onClick={() => setcheck(true)}>
      <div class="btn-box">
        <div class="btn">
          <p>登録</p> 
          <Modal check= {check} />
        </div>
      </div>
      </a>
    {/* </Link> */}
    
  </div>
  <footer></footer>
    </>
  );
};

export default InputCheck;