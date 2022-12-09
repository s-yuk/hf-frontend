import { Restore } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import SsidChartIcon from '@mui/icons-material/SsidChart'

export const Footer = () => {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: '0',
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction label='home' icon={<HomeIcon />} component={Link} to='/homepic' />
      <BottomNavigationAction label='products' icon={<Restore />} component={Link} to='/products' />
      <BottomNavigationAction label='user' icon={<PersonIcon />} component={Link} to='/customer' />
    </BottomNavigation>
  )
}

export const ChildFooter = () => {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: '0',
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction label='ほーむ' icon={<HomeIcon />} component={Link} to='/child' />
      <BottomNavigationAction label='ぐらふ' icon={<SsidChartIcon />} component={Link} to='/child/chart' />
      <BottomNavigationAction label='じぶん' icon={<PersonIcon />} component={Link} to='/child/customer' />
    </BottomNavigation>
  )
}
