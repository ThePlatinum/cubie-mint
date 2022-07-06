import '../styles/globals.css'
import '../assets/fonts/gilroy/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const interval = setInterval(() => {
      let n;
      let a = document.querySelector('[data-cubie].active');
      if (a?.nextElementSibling) {
        n = a.nextElementSibling;
      } else {
        n = document.querySelector('[data-cubie="1"]');
      }
      a?.classList.remove('active');
      n?.classList.add('active');
    }, 4000);

    document.addEventListener("scroll", () => {
      let header = document.querySelector('.Header');
      if (window.scrollY > 150) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App '>
      <div >
        <Component {...pageProps} />
      </div>

      <div>
      </div>
      <div className='containers'>
        <div className='Footer'>
          <div className='socials'>
            <a href='https://twitter.com/Cubie3DNFT' target='_blank' rel="noopener noreferrer">
              <img src='/icons8-twitter.gif' alt='Twitter' />
            </a>
            <a href='https://www.cubie.art' target='_blank' rel="noopener noreferrer">
              <img src='/icons8-geography.gif' alt='Website' />
            </a>
            <a href='https://t.me/CubieNFT' target='_blank' rel="noopener noreferrer">
              <img src='/icons8-telegram-app.gif' alt='Telegram' />
            </a>
          </div>
          <div className='copyright'><strong></strong></div>
        </div>
      </div>
    </div>
  )
}

export default MyApp
