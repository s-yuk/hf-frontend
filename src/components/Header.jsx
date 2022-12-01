import { ArrowBackIos } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Header = ({ title }) => {
  return (
    <AppBar
      // position='sticky'
      sx={{
        position: 'sticky',
        // position: 'fixed',
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
        <Link to='/'>
          <Typography>ログアウト</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
