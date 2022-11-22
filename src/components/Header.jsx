import { ArrowBackIos } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Header = ({ title, name }) => {
  return (
    <AppBar
      position='sticky'
      sx={{
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
        <Link to='logout'>
          <Typography>ログアウト</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
