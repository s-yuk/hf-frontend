import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {} from '../_index.js'
import IconTabs from '../components/IconTabs_child.jsx'

const Customer = () => {
  return (
    <>
      <header></header>
      <main></main>
      <div className='background2'>
        <div className='btn-box'>
          <div className='btn_customer'>
            <Link to={`/login`}>
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
