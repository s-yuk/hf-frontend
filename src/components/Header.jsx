import { ArrowBackIos } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { bgcolor } from '@mui/system'
import { useAuth } from '../hooks/useAuth'

export function Header({ title, IconNone }) {
  return (
    <AppBar
      position='sticky'
      sx={{
        display: 'fixed',
        bgcolor: 'white',
        mb: '10px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link className={`${IconNone ? 'DisplayNone' : ''} `}>
          <ArrowBackIos />
        </Link>
        <Typography
          sx={{
            color: 'black',
            fontWeight: '600',
            m: 'auto',
            fontSize: '18px',
          }}
        >
          {title}
        </Typography>
        <Link to='/'>
          <LogoutIcon />
        </Link>
      </Toolbar>
    </AppBar>
  )
}
