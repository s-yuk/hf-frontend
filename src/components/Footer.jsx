import { Restore } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'

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
      <BottomNavigationAction label='home' icon={<HomeIcon />} />
      <BottomNavigationAction label='point' icon={<Restore />} />
      <BottomNavigationAction label='user' icon={<PersonIcon />} />
    </BottomNavigation>
  )
}
