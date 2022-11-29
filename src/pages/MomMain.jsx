import { CurrencyYen } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

// userBox作成

const MomMain = () => {
  return (
    <>
      <Header />
      <Box
        component='main'
        sx={{
          width: '100%',
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 'solid 1px',
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            mt: 5,
          }}
        >
          H
        </Avatar>
        <Typography>ユーザー</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CurrencyYen />
          <Typography
            variant='h3'
            component='p'
            icon
            sx={{
              fontWeight: '700',
              p: 2,
              '&::after': {
                content: '"pt"',
                fontSize: '1.5rem',
              },
            }}
          >
            {500}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default MomMain
