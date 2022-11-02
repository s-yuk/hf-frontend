import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup, Login } from '../_index.js'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
