import * as React from 'react'
import TextField from '@mui/material/TextField'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs.jsx'
import '../css/customer.css'
import { MiddleButton } from '../components/Buttons'
import { useState } from 'react'
import { Header } from '../components/Header'

const ChildHistory = () => {
  const [name, setNmae] = useState('名前')
  const [pass, setPass] = useState('パスワード')
  const [newpass, setNewpass] = useState('newパスワード')
  const [mail, setMail] = useState('メールアドレス')
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <Header title='子供用会員ページ' />
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
          <div style={{ textAlign: 'center' }}>
            <MiddleButton
              text='変更'
              sx={{
                alignItems: 'center',
                justify: 'center',
              }}
            />
          </div>
        </div>

        <MiddleButton text='アカウント削除' sx={{}} />
        <footer>
          <IconTabs />
        </footer>
      </div>
    </>
  )
}

export default ChildHistory
