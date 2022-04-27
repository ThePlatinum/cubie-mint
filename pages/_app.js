import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App containers">
      <div className='Header'>
        <img src={"https://www.cubie.art/images/dfbc31dada3586107a843274f52ab736.svg"} alt='Cubie Logo' />
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
