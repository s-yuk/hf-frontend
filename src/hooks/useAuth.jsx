import axios from "axios"
import { createContext, useContext, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext(null)
const BASE_URL = "http://localhost:8080/api"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  // TODO JWT tokenをLocal Storageに保存
  // TODO user情報を保存する方法を考える
  const signUp = async (data) => {
    try {
      const res = await axios.post(BASE_URL + "/register", data)
      setUser(data)
      data.role[0].id === '1' ? navigate('/homepic', { replace: true }) : navigate('child', { replace: true })
    } catch (err) {
      console.log(err)
    }
  }

  const logout = () => {
    setUser(null)
    navigate('/', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      signUp,
      logout
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}