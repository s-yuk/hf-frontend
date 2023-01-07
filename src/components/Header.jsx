import { ArrowBackIos, Logout } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = ({ title, IconNone }) => (
  <AppBar
    position='sticky'
    sx={{
      display: 'fixed',
      bgcolor: 'white',
      mb: '10px',
      zindex: 100
    }}
  >
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <ArrowBackIos className={`${IconNone ? 'DisplayNone' : ''} `} />
      <Typography
        sx={{
          color: 'black',
          fontWeight: '600',
          fontSize: '18px',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Logout />
    </Toolbar>
  </AppBar>
)
