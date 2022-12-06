import '../css/index.css'
import { Link } from 'react-router-dom'

export default function Icontabss() {
  return (
    // <meta charset="UTF-8" />
    // <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    // <title>Document</title>
    // <link rel="stylesheet" type="text/css" href="index.css" />
    <div class='navigation'>
      <ul>
        <li class='list active'>
          <div class='back'></div>
          <Link to='/child'>
            <span class='icon'>
              <ion-icon name='home-outline'></ion-icon>
            </span>
            <span class='text'>Home</span>
          </Link>
        </li>
        <li class='list'>
          <a href='#'>
            <span class='icon'>
              <ion-icon name='analytics-outline'></ion-icon>
            </span>
            <span class='text'>グラフ</span>
          </a>
        </li>
        <li class='list'>
          <Link href='/child/customer'>
            <span class='icon'>
              <ion-icon name='person-outline'></ion-icon>
            </span>
            <span class='text'>会員情報</span>
          </Link>
        </li>
        <div class='indicator'></div>
      </ul>
    </div>
  )
}
