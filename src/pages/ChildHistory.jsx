import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { ChildFooter } from '../components/Footer'
import { SmallButton } from '../components/Buttons'
import { Header } from '../components/Header'

function createRow(id, name, date, unit, price) {
  return {
    id,
    name,
    date,
    unit,
    price,
  }
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

function unitTotal(items) {
  return items.map(({ unit }) => unit).reduce((sum, i) => sum + i, 0)
}

const rows = [
  createRow(1, 'Paperclips (Box)', 'date1', 2, 500),
  createRow(2, 'Paper (Case)', 'date1', 1, 400),
  createRow(3, 'Waste Basket', 'date1', 2, 1000),
  createRow(4, 'Waste Basket', 'date1', 2, 1000),
  createRow(5, 'Waste Basket', 'date1', 2, 1000),
  createRow(6, 'Waste Basket', 'date1', 2, 1000),
  createRow(7, 'Waste Basket', 'date1', 2, 1000),
  createRow(8, 'Waste Basket', 'date1', 2, 1000),
  createRow(9, 'Waste Basket', 'date1', 2, 1000),
  createRow(10, 'Waste Basket', 'date1', 2, 1000),
  createRow(11, 'Waste Basket', 'date1', 2, 1000),
]

const invoiceTotal = subtotal(rows)
const invoiceUnitTotal = unitTotal(rows)

function ChildHistory() {
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
              <ListItemText primary='履歴' primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.3rem' }} />
            </ListItem>
          </List>
        </nav>
      </Box>
      <Divider />

      <TableContainer component={Paper} style={{ maxHeight: '60vh' }}>
        <Table sx={{ height: 'max-content' }} aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>日付</TableCell>
              <TableCell>個数</TableCell>
              <TableCell>ポイント</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
            </TableRow>
            <TableRow />
            <TableRow>
              <TableCell>合計</TableCell>
              <TableCell>{invoiceUnitTotal}</TableCell>
              <TableCell>{invoiceTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '5%',
        }}
      >
        <SmallButton component={Link} to='/child'>
          もどる
        </SmallButton>
      </Box>
      <ChildFooter />
    </>
  )
}

export default ChildHistory
