import { Tab, Tabs } from '@mui/material'
import { Home, Man, SsidChart } from '@mui/icons-material'
import '../css/icons.css'
import '../css/buttons.css'
import { Link } from 'react-router-dom'

export default function IconTabs() {
  return (
    <div className='TabBottom'>
      <Tabs>
        <Link to={'/home'}>
          <Tab icon={<Home sx={{ fontSize: 40 }} />} aria-label='phone' />
        </Link>
        <Link to={'/'}>
          <Tab icon={<SsidChart sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
        <Link to={'/customer'}>
          <Tab icon={<Man sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
      </Tabs>
    </div>
  )
}
