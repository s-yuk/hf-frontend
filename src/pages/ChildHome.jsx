import { FolderSpecial } from '@mui/icons-material'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { Header } from '../components/Header'
import { BigButton, SmallButton } from '../components/Buttons'
import IconTabs from '../components/IconTabs'

const ChildHome = () => {
  return (
    <>
      <Header title='子ども用メインページ' />
      <Box
        sx={{
          width: '90%',
          height: 150,
          bgcolor: 'black',
          mx: 'auto',
        }}
      ></Box>
      <Box
        sx={{
          width: '90%',
          maxHeight: 300,
          mx: 'auto',
        }}
      >
        <nav aria-label='main mailbox folders'>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FolderSpecial />
                </ListItemIcon>
                <ListItemText primary='交換先一覧' />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />

        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Box>
      <BigButton text='交換' />
      <SmallButton text='履歴' />
      <IconTabs />
    </>
  )
}
export default ChildHome
