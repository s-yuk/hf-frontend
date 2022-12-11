import { Navigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"

export const RequireAuth = ({ children }) => {
  const { user } = useAuth()
  if (!Object.keys(user).length) {
    return <Navigate to='/' />
  }
  return children
}
