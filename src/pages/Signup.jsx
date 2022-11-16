import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Link to={'/login'}>
        <Button variant='contained'>loginpページへ</Button>
      </Link>
    </>
  )
}

export default Signup
