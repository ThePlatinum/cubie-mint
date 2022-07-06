import { useState, useEffect } from 'react';
import Head from 'next/head'
// import Breed from '../components/earn';
import _const from '../const';
import { Card, CardBody, Row, Col, CardImg, CardFooter, Button } from 'reactstrap';
import camp from '../public/mintcamp.png'
import Image from 'next/image';
import Header from '../components/header';

export default function Staked() {

  const [contractStack, setStackContract] = useState(null)
  const STACKING_CONTRACT = _const.STACKING_CONTRACT
  const [cubies, setCubies] = useState([]);
  const [powered, setPower] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb && window.tronWeb.ready) {
        setStackContract(await window.tronWeb.contract().at(STACKING_CONTRACT));  // Connect to staking contract
      }
      clearInterval(interval);
    }, 3000);
  }, []);

  useEffect(() => {
    if (contractStack != null) {
      contractStack._tokensOfOwner()
      .call()
      .then(res => {
        res.map(cubie => {
          fetch(`/api/cubies/${parseInt(cubie._hex)}`)
          .then(res => res.json())
          .then(res => setCubies(cubies => [...cubies, res]))
          .catch(err => console.log('err: ', err));
        })
      })
    }
  }, [contractStack])

  const Unstake = async (_token, _unstake) => {
    if (contractStack != null) {
      await contractStack.claim(_token, _unstake)
      .send({ callValue: 0 })
      .then(res => alert('success'))
      .catch(err => console.log('err: ', err) );
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.querySelector('.Header_transp');
      if (window.scrollY > 150) header?.classList.add('scrolled');
      else header?.classList.remove('scrolled');
    });
  }, []);

  return (
    <div >
      <Head>
        <title>Cubies - My Cubies</title>
        <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <Breed /> */}
      <Header classType='Header_transp' />
      <Col className='mintcamp'>
        <Image src={camp} />
      </Col>

      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card card-body'>
              Stake stats
              <Col>
                Number Staked: { cubies.length }
              </Col>
              <Col>
                Total Staked ⛏️Power: {powered}
              </Col>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='card card-body'>
              You Staked Cubies
              <Row>
                {cubies.map((cubie, i) => {
                  let cubie_id = cubie.name.replace('Cubie #', '')
                  cubie_id = parseInt(cubie_id)
                  // setPower(powered => powered+cubie.power)
                  if (cubies.length > 0) {
                    return (
                      <Col md={6} key={i}>
                        <Card>
                          <CardImg src={cubie.image} alt='Cubie Display' />
                          <CardBody>
                            <h5> <strong>{cubie.name}</strong> </h5>
                            <p> <strong>⛏️Power: {cubie.power} || {cubie.rarity} </strong> </p>
                          </CardBody>
                          <CardFooter className=''>
                            <Button className='unStakeBtn' onClick={() => Unstake(cubie_id, true)}>
                              Unstake
                            </Button> {' '}
                            <Button className='stakeBtn' onClick={() => Unstake(cubie_id, false)}>
                              Claim
                            </Button>
                          </CardFooter>
                        </Card>
                      </Col>
                    )
                  }
                  else {
                    return (
                      <Col className='text-center p-5' key={1}>
                        No Cubies stacked.
                      </Col>
                    )
                  }
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
