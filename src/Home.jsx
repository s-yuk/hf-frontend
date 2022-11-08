
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import { Login } from "./Login";
import TextField from '@mui/material/TextField';
import { SampleHome } from "./SampleHome";
import  "./css/App.css";
import  "./css/tnp.css";
import  "./css/button-tnp.css";



const Home = () => {
  return (
  <>
  <header></header>
  <main></main>
  <div class="background">
  
    <div class="btn-box">
      <div class="btn">
        <Link to={`/login/`}>
          <p>ログインはこちら</p>
        </Link>
      </div>
    </div>
     <div class="member-link">
     <p>会員登録は</p><Link to={`/MemberRegister/`}>こちら</Link>
      </div>
    </div>
  
  <footer></footer>
  </>
  );
};

export default Home;