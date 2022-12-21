import { Routes, Route } from 'react-router-dom'
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
} from './_index'
import { AuthProvider } from './hooks/useAuth'
import { RequireAuth } from './RequireAuth'

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route
        path='homepic'
        element={
          <RequireAuth>
            <Homepic />
          </RequireAuth>
        }
      />
      <Route
        path='mommain/:userId'
        element={
          <RequireAuth>
            <MomMain />
          </RequireAuth>
        }
      />
      <Route
        path='customer'
        element={
          <RequireAuth>
            <Customer />
          </RequireAuth>
        }
      />
      <Route
        path='products'
        element={
          // <RequireAuth>
          <Products />
          // </RequireAuth>
        }
      />
      <Route
        path='child'
        element={
          <RequireAuth>
            <ChildHome />
          </RequireAuth>
        }
      />
      <Route
        path='child/history'
        element={
          <RequireAuth>
            <ChildHistory />
          </RequireAuth>
        }
      />
      <Route
        path='child/chart'
        element={
          <RequireAuth>
            <ChildChart />
          </RequireAuth>
        }
      />
      <Route
        path='child/customer'
        element={
          <RequireAuth>
            <ChildCustomer />
          </RequireAuth>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </AuthProvider>
)

export default App
