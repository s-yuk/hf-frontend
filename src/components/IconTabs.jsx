import { Tab, Tabs } from '@mui/material'
import { Home, Man, SsidChart } from '@mui/icons-material'
import '../css/buttons.css'
import { Link } from 'react-router-dom'

export default function IconTabs() {
  return (
    <div className='TabBottom'>
      <Tabs style={{ margin: 'auto', width: '100%' }}>
        <Link to='/child' style={{ fontSize: '30px' }}>
          <Tab icon={<Home sx={{ fontSize: 40 }} />} aria-label='phone' />
        </Link>
        <Link to='/child/chart'>
          <Tab icon={<SsidChart sx={{ fontSize: 40 }} />} aria-label='chart' />
        </Link>
        <Link to='/child/customer'>
          <Tab icon={<Man sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
      </Tabs>
    </div>
  )
}
