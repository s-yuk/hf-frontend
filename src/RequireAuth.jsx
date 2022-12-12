import { Navigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"

export const RequireAuth = ({ children }) => {
  const { user, token } = useAuth()
  if (!Object.keys(user).length && !Object.keys(token).length) {
    return <Navigate to='/' />
  }
  return children
}
