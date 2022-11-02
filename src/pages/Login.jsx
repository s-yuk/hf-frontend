import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
      <Link to={'/Signup'}>
        <Button variant='contained'>Signup</Button>
      </Link>
    </>
  )
}

export default Login
