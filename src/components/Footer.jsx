import { Favorite, LocationOn, Restore } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import { useState } from 'react'

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
      <BottomNavigationAction label='home' icon={<Restore />} />
      <BottomNavigationAction label='point' icon={<Favorite />} />
      <BottomNavigationAction label='user' icon={<LocationOn />} />
    </BottomNavigation>
  )
}
