import { Link } from "react-router-dom";
import icon from "./images/icon.png";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import  "./css/App.css";
import  "./css/tnp.css";
import  "./css/button-tnp.css";
import IconTabs from "./components/IconTabs";

const MemberRegister = () => {
  return (
    <>
  <header></header>
  <main></main>
  <div class="background1">
    {/* <img src={icon}  width="130px" height="130px" /> */}
    <div className="input-text-login">
      <TextField 
      id="outlined-basic"
      label="名前" 
      variant="outlined" 
      sx={{ width: 300}}
      />
      <Box sx={{ m: 5 }} />
      <TextField id="outlined-basic" 
      label="パスワード"
      variant="outlined"
      sx={{ width: 300}}
       />

      <Box sx={{ m: 5 }} />
      <TextField id="outlined-basic" 
      label="メール"
      variant="outlined"
      sx={{ width: 300}}
       />
       
    </div>
    <Link to={`/InputCheck/`}>
      <div class="btn-box">
        <div class="btn">
          <p>入力内容確認</p>
        </div>
      </div>
    </Link>
  </div>
  <footer>
   
  </footer>
 
    </>
  );
};

export default MemberRegister;