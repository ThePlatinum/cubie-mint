import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';

export default function Account({ contract }) {

  const [canMint, setCanMint] = useState(true)
  const [userAddress, setUserAddress] = useState('Wallet not connected')
  const [TronWeb, setTronWeb] = useState(null);
  const [cubies, setCubiess] = useState([]);

  // TODO: display them in the UI

  const loadOwned = () => {
    contract._tokensOfOwner(userAddress).call().then(res => {
      res.map(cubie => {
        fetch(`/api/cubies/${parseInt(cubie._hex)}`)
          .then(res => res.json())
          .then(res => {
            console.log('res: ', res)
            setCubiess(cubiess => [...cubiess, res])
          })
          .catch(err => console.log('err: ', err));
      })
    })
  }

  useEffect(() => {
    if (window.tronWeb && window.tronWeb.ready) {
      setUserAddress(window.tronWeb.defaultAddress.base58);
      if (contract != null) {
        contract.balanceOf(window.tronWeb.defaultAddress.base58).call().then(res => {
          if (parseInt(res._hex) > 3) {
            console.log('res: ', parseInt(res._hex));
            setCanMint(false)
          }
        })
        setTronWeb(window.tronWeb);
        loadOwned()
      }
    }
  }, []);

  return (
    <div >
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
                    <h5>{cubie.name}</h5>
                    <p>Power:  {cubie.power} || {cubie.rarity} </p>
                  </CardBody>
                </Card>
              </Col>
            )
          })
        }
      </Row>

      <Col>{(TronWeb && contract && canMint) ? <Button block href="/" >Mint More</Button> : ""} </Col>

    </div>
  );
}
