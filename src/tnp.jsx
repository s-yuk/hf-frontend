import * as React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <header></header>
    <main></main>
    <div class="background">
      <div class="btn-box">
        <div class="btn">
          <p>ログインはこちら</p>
        </div>
      </div>
      <BrowserRouter>
        <div class="member-link">
          <p>会員登録は</p>
          <Link to={`/Login/`}>こちら</Link>
        </div>
      </BrowserRouter>
      </div>
    
    <footer></footer>
    </>
  );
};

export default Login;