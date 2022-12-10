import { Home, Person, Restore, SsidChart } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
      <BottomNavigationAction label='ほーむ' icon={<Home />} component={Link} to='/child' />
      <BottomNavigationAction label='ぐらふ' icon={<SsidChart />} component={Link} to='/child/chart' />
      <BottomNavigationAction label='じぶん' icon={<Person />} component={Link} to='/child/customer' />
    </BottomNavigation>
  )
}
