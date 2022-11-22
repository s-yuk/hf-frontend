import { Box } from '@mui/material'
import { Header } from '../components/Header'
import IconTabs from '../components/IconTabs'
import { SmallButton } from '../components/Buttons'
const ChildChart = () => {
  return (
    <>
      <Header title='チャート' />
      <Box
        sx={{
          width: '90%',
          height: 300,
          bgcolor: 'black',
          mx: 'auto',
        }}
      ></Box>

      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          mt: 1,
        }}
      >
        <SmallButton text='かう' />
        <SmallButton text='うる' />
      </Box>
      <IconTabs />
    </>
  )
}

export default ChildChart
