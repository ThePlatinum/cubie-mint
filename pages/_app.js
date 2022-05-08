import '../styles/globals.css'
import '../assets/fonts/gilroy/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const navigate = useRouter()
  
  return (
    <div className="App containers">
      <div className='Header'>
        <img src={"https://www.cubie.art/images/dfbc31dada3586107a843274f52ab736.svg"} alt='Cubie Logo' />

        <Button className='btn-primary' onClick={() => navigate.push( '/my-cubies' ) }>
          My Cubies
        </Button>
      </div>

      <Component {...pageProps} />
      
      <div className='Footer'>
        <div className='socials'>
          <a href='https://twitter.com/Cubie3DNFT' target='_blank' rel="noopener noreferrer">
            <img src='/twitter.png' alt='Twitter' />
          </a>
          <a href='https://www.cubie.art' target='_blank' rel="noopener noreferrer">
            <img src='/website.png' alt='Website' />
          </a>
          <a href='https://t.me/CubieNFT' target='_blank' rel="noopener noreferrer">
            <img src='/telegram.png' alt='Telegram' />
          </a>
        </div>
        <div className='copyright'>Copyright</div>
      </div>
    </div>
  )
}

export default MyApp
