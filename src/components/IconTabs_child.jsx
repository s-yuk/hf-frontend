import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import Chart from '@mui/icons-material/SsidChart'
import ManIcon from '@mui/icons-material/Man'
import '../css/icons.css'
import '../css/button-tnp.css'

export default function IconTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {}

  return (
    <div className='TabBottom'>
      <Tabs>
        <Link to={`/Home`}>
          <Tab icon={<HomeIcon sx={{ fontSize: 40 }} />} aria-label='phone' />
        </Link>
        <Link to={`/MemberCard`}>
          <Tab icon={<Chart sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
        <Link to={`/customer`}>
          <Tab icon={<ManIcon sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
      </Tabs>
    </div>
  )
}
