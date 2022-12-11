import '../css/icontab.css'
import { Link } from 'react-router-dom'

export default function IconTabskari() {
  return (
    <div className='body'>
      <div class="navigation">
        <ul>
          <li class="list active">
            <div class="back"></div>
            <a >
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span class="text">Home</span>

            </a>
          </li>
          <li class="list">
            <a >
              <span class="icon">
                <ion-icon name="analytics-outline"></ion-icon>
              </span>
              <span class="text">グラフ</span>
            </a>
          </li>
          <li class="list">
            <a >
              <span class="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span class="text">会員情報</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>

    </div>
  )
}
