import '../css/icontab.css'
import { Link } from 'react-router-dom'

export default function IconTabskari() {
  return (
    <div className='body'>
      <div className='navigation'>
        <ul>
          <li className='list active'>
            <div className='back'></div>
            <a href='#'>
              <span className='icon'>
                <ion-icon name='home-outline'></ion-icon>
              </span>
              <span className='text'>Home</span>
            </a>
          </li>
          <li className='list'>
            <a href='#'>
              <span className='icon'>
                <ion-icon name='analytics-outline'></ion-icon>
              </span>
              <span className='text'>グラフ</span>
            </a>
          </li>
          <li className='list'>
            <Link to={'/child/customer'}>
              <span className='icon'>
                <ion-icon name='person-outline'></ion-icon>
              </span>
              <span className='text'>会員情報</span>
            </Link>
          </li>
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  )
}
