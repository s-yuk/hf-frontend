import axios from 'axios'
import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const signUp = async ({ url, body }) => {
    try {
      const { data } = await axios.post(url, body, { withCredentials: true })
      console.log(data, body.role)
      body.role === '1' ? navigate('/child', { replace: true }) : navigate('/homepic', { replace: true })
    } catch (err) {
      console.log("email登録済")
      console.log(err)
    }
  }
  const value = useMemo(
    () => ({
      signUp
    }),
    []
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
