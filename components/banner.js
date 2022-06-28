
import { Col, Row } from 'reactstrap';

export default function Banner(){
  return(
    <Col className='footbanner'>
    <Row>
      <Col md={6} className='left'>
        <h1>
          Explore a set of <strong>cubic universes!</strong>
        </h1>
        <div className="p">
          <p>
            <b>Cubie is a community-driven NFT & GameFi Platform.</b>
            <br />
            Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games.
          </p>
          <div className='py-3'>
            <a className='btn btn-light myCubiesBtn' href='#mint'>
              Mint Now
            </a>
          </div>
        </div>
      </Col>
      <Col md={6} className='right'>
        <img src='/ix/cubie-1.png' data-cubie="1" alt='Cubie Img' className='active' />
        <img src='/ix/cubie-2.png' data-cubie="2" alt='Cubie Img' />
        <img src='/ix/cubie-3.png' data-cubie="3" alt='Cubie Img' />
        <img src='/ix/cubie-4.png' data-cubie="4" alt='Cubie Img' />
        <img src='/ix/cubie-5.png' data-cubie="5" alt='Cubie Img' />
      </Col>
    </Row>
  </Col>
  )
}