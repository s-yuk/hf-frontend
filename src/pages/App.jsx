import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup, Login, ChildCustomer, ChildHome } from '../_index.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/child'} element={<ChildHome />} />
        <Route path={'/child/customer'} element={<ChildCustomer />} />
        {/* <Route path={'/child/history'} element={<ChildHistory />} />
        <Route path={'/child/chart'} element={<ChildChart />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
