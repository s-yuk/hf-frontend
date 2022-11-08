import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import ManIcon from '@mui/icons-material/Man'
import '../css/icons.css'
import '../css/button-tnp.css'

export default function IconTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {}

  return (
    <div className='TabBottom'>
      <Tabs>
        <Link to={`/MemberHome`}>
          <Tab icon={<HomeIcon sx={{ fontSize: 40 }} />} aria-label='phone' />
        </Link>
        <Link to={`/MemberReserve`}>
          <Tab icon={<SmartphoneIcon sx={{ fontSize: 40 }} />} aria-label='favorite' />
        </Link>
        <Link to={`/MemberCard`}>
          <Tab icon={<QrCode2Icon sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
        <Link to={`/MemberCard`}>
          <Tab icon={<ManIcon sx={{ fontSize: 40 }} />} aria-label='person' />
        </Link>
      </Tabs>
    </div>
  )
}
