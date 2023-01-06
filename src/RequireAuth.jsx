import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies("[token]");

  if (cookies.token === undefined) {
    return <Navigate to='/' />
  }
  return children
}
