import { Signup, Login, ChildCustomer, ChildHome, ChildHistory, ChildChart, Homepic, MomMain } from '../_index.js'
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
        <Route path={'/home'} element={<Homepic />} />
        <Route path={'/mommain'} element={<MomMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
