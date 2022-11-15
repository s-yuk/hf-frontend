import * as React from 'react'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs.jsx'
import '../css/customer.css'
import { MiddleButton } from '../components/Buttons'
import { useState } from 'react'

const Customer = () => {
  const [name, setNmae] = useState('名前')
  const [pass, setPass] = useState('パスワード')
  const [newpass, setNewpass] = useState('newパスワード')
  const [mail, setMail] = useState('メールアドレス')
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <header></header>
      <main></main>
      <div className='background2'>
        <div className='customerdata'>
          <TextField
            id='standard-multiline-flexible'
            label='名前'
            multiline
            maxRows={4}
            defaultValue={name}
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            label='パスワード'
            multiline
            maxRows={4}
            defaultValue={pass}
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            label='新しいパスワード'
            multiline
            maxRows={4}
            defaultValue={newpass}
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
          <TextField
            id='standard-multiline-flexible'
            label='メールアドレス'
            multiline
            maxRows={4}
            defaultValue={mail}
            onChange={(e) => handleChange(e)}
            variant='standard'
          />
        </div>
        <MiddleButton
          text='変更'
          sx={{
            textAlign: 'center',
          }}
        />

        <div className='logout-box'>
          <div className='btn-customer'>
            <Link to={'/login'}>
              <p>ログアウト</p>
            </Link>
          </div>
        </div>
        <footer>
          <IconTabs />
        </footer>
      </div>
    </>
  )
}

export default Customer
