import { Box } from '@mui/material'
import { Header } from '../components/Header'
import IconTabs from '../components/IconTabs'
import { SmallButton } from '../components/Buttons'
import ChartApi from '../components/ChartApi'
import AmChart from '../components/AmChart';
const ChildChart = () => {
  return (
    <>
      <Header title='チャート' IconNone="flase" />

      <ChartApi />

      <IconTabs />
    </>
  )
}

export default ChildChart
