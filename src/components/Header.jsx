import { ArrowBackIos } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Header = ({ title }) => {
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }

  return (
    <AppBar
      sx={{
        position: 'sticky',
        top: '0',
        bgcolor: 'white',
        mb: '10px',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to=''>
          <ArrowBackIos />
        </Link>
        <Typography
          sx={{
            color: 'black',
            fontWeight: '600',
          }}
        >
          {title}
        </Typography>
        <Typography>
          <button onClick={handleLogout}>
            ログアウト
          </button>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
