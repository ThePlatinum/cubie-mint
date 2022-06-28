import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Alert, Button, Card, CardBody, CardFooter, CardImg, Col, Row } from 'reactstrap';
import { useRouter } from 'next/router';

export default function Accounts() {

  const navigate = useRouter()
  const [contract, setContract] = useState(null)
  const [canMint, setCanMint] = useState(false)
  const [userAddress, setUserAddress] = useState('Wallet not connected')
  const [cubies, setCubies] = useState([]);
  const [contractStack, setStackContract] = useState(null)

  const CONTRACT_ADDRESS = 'TQFM2CJA5x3JxnJRLSJVCwo9nch1bbbeEG'
  const STACKING_CONTRACT = 'TMPSjuEgF5p3BV7aA1fgJV3x87kgSPhN55'
  // TWTNYfVbUKwwDzaSFjMAKpPo76wfRGT8Yi
  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb && window.tronWeb.ready) {
        setUserAddress(window.tronWeb.defaultAddress.base58);
        setContract(await window.tronWeb.contract().at(CONTRACT_ADDRESS));  // Connect to contract
        setStackContract(await window.tronWeb.contract().at(STACKING_CONTRACT));  // Connect to staking contract
      }
      clearInterval(interval);
    }, 3000);
  }, []);

  useEffect(() => {
    if (contract != null) {
      contract._tokensOfOwner(window.tronWeb.defaultAddress.base58).call().then(res => {
        res.map(cubie => {
          fetch(`/api/cubies/${parseInt(cubie._hex)}`)
            .then(res => res.json())
            .then(res => setCubies(cubies => [...cubies, res]))
            .catch(err => console.log('err: ', err));
        })
      })
    }
  }
    , [contract])

  useEffect(() => {
    if (cubies.length > 4) {
      setCanMint(true)
    }
  }
    , [cubies])

  const Approve = async () => {

    if (contract != null) {
      await contract.setApprovalForAll(STACKING_CONTRACT, true)
        .send({ callValue: 0 })
        .then(res => alert('success'))
        .catch(err => {
          console.log('err: ', err);
        });
    }
  }

  return (
    <div>

      <Col className='approvalbar'>
        <Row>
          <Col md={6} className='right'>
            <h1>
              Stake your <strong>Cubies!</strong>
            </h1>
            <div className="p">
              <p>
                <b>Breed your cubies and earn rewards for it.</b>
                <br />
                Ready to start on staking your cubies? Approve them first.
              </p>
            </div>
          </Col>
          <Col md={6} className='left f-right'>
            <div className='py-3'>
              <a className='btn btn-light myCubiesBtn' onClick={()=>Approve()}>
                Approve for Staking
              </a>
            </div>
          </Col>
        </Row>
      </Col>
      <div className="containers">
        <Head>
          <title>Cubies - My Cubies</title>
          <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="Banner">
          <h2>Your Minted Cubies</h2>
          <p>Address: {userAddress} </p>
        </div>

        <Row>
          {cubies.map((cubie, i) => {
            return (
              <Col md={4} key={i}>
                <Card>
                  <CardImg src={cubie.image} alt='Cubie Display' />
                  <CardBody>
                    <h5><strong>{cubie.name}</strong></h5>
                    <p><strong>⛏️Power:  {cubie.power} || {cubie.rarity} </strong></p>
                  </CardBody>
                  <CardFooter>
                    <Button className='btn-primary stakeBtn' onClick={() => navigate.push('/stake')}>
                      Stake
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            )
          })}
        </Row>

        <Col><Button block href="/" disabled={canMint} >Mint More</Button></Col>

      </div>
    </div>
  )
}
