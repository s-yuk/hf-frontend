import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup, Login, Customer, Home } from '../_index.js'
import '../css/button-tnp.css'
import '../css/tnp.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/customer'} element={<Customer />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/home'} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
