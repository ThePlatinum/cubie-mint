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
          <a href='mailto:' target='_blank' rel="noopener noreferrer">
            <img src='/email.png' alt='Mail' />
          </a>
          <a href='https://www.linkedin.com/in/cubieart/' target='_blank' rel="noopener noreferrer">
            <img src='/linkedin.png' alt='Linkedin' />
          </a>
          <a href='https://www.facebook.com/cubieart/' target='_blank' rel="noopener noreferrer">
            <img src='/facebook.png' alt='facebook' />
          </a>
        </div>
        <div className='copyright'>Copyright</div>
      </div>
    </div>
  )
}

export default MyApp
