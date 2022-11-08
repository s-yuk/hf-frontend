import { Link } from "react-router-dom";
import icon from "./images/icon.png";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import  "./css/Member.css";
import IconTabs from "./components/IconTabs";

const MemberCard = () => {
  return (
    <>
    <header></header>
    <main></main>
    <div className="background1">
      <div className="btn_center">
        <div className="btn-box-reserve">
          <div className="btn-reserve">
            <Link to={`/login/`}>
              <p>ログインはこちら</p>
            </Link>
          </div>
        </div>
        <div className="btn-box-reserve">
          <div className="btn-reserve">
            <Link to={`/login/`}>
              <p>ログインはこちら</p>
            </Link>
          </div>
        </div>
      </div>
  
      
  
      <IconTabs />
    </div>
    <footer>
     
    </footer>
      </>
  );
};

export default MemberCard;