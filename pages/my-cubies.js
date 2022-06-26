import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';

export default function Accounts() {

  const [contract, setContract] = useState(null)
  const [canMint, setCanMint] = useState(false)
  const [userAddress, setUserAddress] = useState('Wallet not connected')
  const [cubies, setCubies] = useState([]);

  const CONTRACT_ADDRESS = 'TQFM2CJA5x3JxnJRLSJVCwo9nch1bbbeEG'
// TWTNYfVbUKwwDzaSFjMAKpPo76wfRGT8Yi
  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb && window.tronWeb.ready) {
        setUserAddress(window.tronWeb.defaultAddress.base58);
        setContract(await window.tronWeb.contract().at(CONTRACT_ADDRESS));  // Connect to contract
      }
      clearInterval(interval);
    }, 3000);
  }, []);

  useEffect(()=>{
    if (contract != null) {
        contract._tokensOfOwner(window.tronWeb.defaultAddress.base58).call().then(res => {
          res.map(cubie => {
            fetch(`/api/cubies/${parseInt(cubie._hex)}`)
              .then(res => res.json())
              .then(res => setCubies(cubies => [...cubies, res]) )
              .catch(err => console.log('err: ', err));
          })
        })
    }
  }
  ,[contract])

  useEffect(()=>{
    if(cubies.length > 4){
      setCanMint(true)
    }
  }
  ,[cubies])

  return (
    <div >
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
              </Card>
            </Col>
          )
        })}
      </Row>

      <Col><Button block href="/" disabled={canMint} >Mint More</Button></Col>

    </div>
  )
}
