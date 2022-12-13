import { ArrowBackIos } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useAuth } from '../hooks/useAuth'

export function Header({ title }) {
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
        <ArrowBackIos />
        <Typography
          sx={{
            color: 'black',
            fontWeight: '600',
          }}
        >
          {title}
        </Typography>
        <Button variant='text' onClick={handleLogout}>
          ログアウト
        </Button>
      </Toolbar>
    </AppBar>
  )
}
