import * as React from 'react'
import { FolderSpecial } from '@mui/icons-material'
import {
  Modal,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs.jsx'
import { MiddleButton, SmallButton } from '../components/Buttons'
import { useState } from 'react'
import { FixedSizeList } from 'react-window'
import { Header } from '../components/Header'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createRow(name, date, unit, price) {
  return { name, date, unit, price }
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

function unittotal(items) {
  return items.map(({ unit }) => unit).reduce((sum, i) => sum + i, 0)
}

const rows = [
  createRow('Paperclips (Box)', 'date1', 2, 500),
  createRow('Paper (Case)', 'date1', 1, 400),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
  createRow('Waste Basket', 'date1', 2, 1000),
]

const invoiceunitTotal = unittotal(rows)
const invoiceTotal = subtotal(rows)

const ChildHistory = () => {
  return (
    <>
      <Header title='子供用会員ページ' />
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <nav aria-label='main mailbox folders'>
          <List>
            <ListItem disablePadding>
              <ListItemText primary='履歴' sx={{ fontSize: 10 }} />
            </ListItem>
          </List>
        </nav>
      </Box>
      <Divider />

      <TableContainer component={Paper} style={{ maxHeight: '350px' }}>
        <Table sx={{ height: 'max-content' }} aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>日付</TableCell>
              <TableCell>個数</TableCell>
              <TableCell>値段</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
            </TableRow>
            <TableRow></TableRow>
            <TableRow>
              <TableCell>合計</TableCell>
              <TableCell>{invoiceunitTotal}</TableCell>
              <TableCell>{invoiceTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '10%',
        }}
      >
        <SmallButton text='戻る' to='/child'></SmallButton>
      </Box>
      <IconTabs />
    </>
  )
}

export default ChildHistory
