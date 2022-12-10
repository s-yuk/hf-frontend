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
  MomMain,
  NotFound,
} from './_index.js'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='mommain' element={<MomMain />} />
        <Route path='homepic' element={<Homepic />} />
        <Route path='customer' element={<Customer />} />
        <Route path='products' element={<Products />} />
        <Route path='child' element={<ChildHome />} />
        <Route path='child/history' element={<ChildHistory />} />
        <Route path='child/chart' element={<ChildChart />} />
        <Route path='child/customer' element={<ChildCustomer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
