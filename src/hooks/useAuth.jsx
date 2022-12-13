import axios from 'axios'
import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)
const BASE_URL = 'http://localhost:8080/api'

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const [token, setToken] = useState({})
  const navigate = useNavigate()

  // TODO JWT tokenをLocal Storageに保存
  // TODO user情報を保存する方法を考える
  const signUp = async (userInfo) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, userInfo)
      userInfo.roles[0].id === '1' ? navigate('/child', { replace: true }) : navigate('/homepic', { replace: true })
      setUser(userInfo)
      setToken(data)
    } catch (err) {
      console.log(err)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    navigate('/', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      token,
      signUp,
      logout,
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
