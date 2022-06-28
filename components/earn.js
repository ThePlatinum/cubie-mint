
import { Col, Row } from 'reactstrap';

export default function Breed(){
  return(
    <Col className='footbanner'>
    <Row>
      <Col md={6} className='left'>
        <h1>
          Breed your Cubies and <strong>Earn!</strong>
        </h1>
        <div className="p">
          <p>
            Earn <b>CUBE</b>, the platform curreny of the cubic universes!.
            <br />
          </p>
          <div className='py-3'>
            <a className='btn btn-light myCubiesBtn' href='#earn'>
              Earn Rewards
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