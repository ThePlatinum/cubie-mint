import { Button, Card, Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';

export default function Account({ contract }) {

  const [canMint, setCanMint] = useState(true)
  const [userAddress, setUserAddress] = useState('Wallet not connected')
  const [TronWeb, setTronWeb] = useState(null);

  // TODO: get each of the users owned tokenIds
  // TODO: run a map on them and fetch their data
  // TODO: display them in the UI

  fetch('https://api.npoint.io/3a7386e071b5059044ce')
  .then(res => res.json())
  .then(res => {
    // console.log('res: ', res)
  })
  .catch(err => {
    // console.log('err: ', err)
  });

  useEffect(() => {
    async function wallet(){
      if (window.tronWeb && window.tronWeb.ready) {
        setUserAddress( window.tronWeb.defaultAddress.base58 );
        if (contract != null) {
          await contract.balanceOf(window.tronWeb.defaultAddress.base58).call().then(res => {
            if (parseInt(res._hex) > 3) {
              console.log('res: ', parseInt(res._hex));
              setCanMint(false)
              setTronWeb(window.tronWeb);
            }
          })
        }
      }
    }
    wallet()
  }, []);

  return (
    <div >
      <div className="Banner">
        <h2>Your Minted Cubies</h2>
        <p>Address: {userAddress} </p>
      </div>

      <Card className='priceDisplay card-body'>
        <Row>
          <Col md={6}> </Col>
          <Col md={6} className='verticalCenter'> </Col>
        </Row>
      </Card>
      <Col>{(TronWeb && contract && canMint) ? <Button block href="/" >Mint More</Button> : "" } </Col>

    </div>
  );
}
