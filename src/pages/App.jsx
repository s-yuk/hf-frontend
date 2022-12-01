import {
  Signup,
  Login,
  ChildCustomer,
  ChildHome,
  ChildHistory,
  ChildChart,
  Homepic,
  Customer,
  Products,
} from '../_index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/child'} element={<ChildHome />} />
        <Route path={'/child/customer'} element={<ChildCustomer />} />
        <Route path={'/child/history'} element={<ChildHistory />} />
        <Route path={'/child/chart'} element={<ChildChart />} />
        <Route path={'/homepic'} element={<Homepic />} />
        <Route path={'/customer'} element={<Customer />} />
        <Route path={'/products'} element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
