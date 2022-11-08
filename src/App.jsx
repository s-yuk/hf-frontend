import logo from './logo.svg';
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { SampleHome } from "./SampleHome";
import Home from "./Home";
import Login from "./Login";
import MemberRegister from "./MemberRegister";
import MemberHome from "./MemberHome";
import InputCheck from "./InputCheck";
import MemberCard from "./MemberCard";
import MemberReserve from "./MemberReserve";
import MemberReserveCheck from "./MemberReserveCheck";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={`/`} element={<Home />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/MemberRegister/`} element={<MemberRegister />} />
        <Route path={`/MemberHome/`} element={<MemberHome />} />
        <Route path={`/InputCheck/`} element={<InputCheck />} />
        <Route path={`/MemberCard/`} element={<MemberCard />} />
        <Route path={`/MemberReserve/`} element={<MemberReserve />} />
        <Route path={`/MemberReserveCheck/`} element={<MemberReserveCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;