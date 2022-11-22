import * as React from 'react'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import {} from '../_index.js'
import '../css/childhistory.css'
import IconTabs from '../components/IconTabs.jsx'
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
        <div className='historybox'>
          <div className='history'>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
          <div className='topmargin'>
            <Link to='/child'>
              <MiddleButton text='戻る'></MiddleButton>
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

export default ChildHistory
