import { ArrowBackIos } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';


export const Header = ({ title, IconNone }) => {

  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          position: 'fixed',
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
          <Link className={`${IconNone ? "DisplayNone" : ""} `}>
            <ArrowBackIos
            />
          </Link>
          <Typography
            sx={{
              color: 'black',
              fontWeight: '600',
              m: "auto",
              fontSize: "18px"

            }}
          >
            {title}
          </Typography>
          <Link to="/">
            <LogoutIcon />
          </Link>
        </Toolbar>
      </AppBar>


    </>
  )
}
