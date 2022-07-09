import { useState, useEffect } from 'react';
import Head from 'next/head'
// import Breed from '../components/earn';
import _const from '../const';
import { 
  Card, CardBody, Row, Col, 
  CardImg, CardFooter, Button, 
  Modal, ModalHeader, ModalBody, 
  ModalFooter 
} from 'reactstrap';
import camp from '../public/mintcamp.png'
import Image from 'next/image';
import Header from '../components/header';

export default function Staked() {

  const [contractStack, setStackContract] = useState(null)
  const STACKING_CONTRACT = _const.STACKING_CONTRACT
  const [rewardContract, setRewardContract] = useState(null)
  const REWARD_CONTRACT = _const.REWARD_ADDRESS
  const [cubies, setCubies] = useState([]);
  const [hasPaid, setHasPaid] = useState([]);
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(0);
  const [reward, setReward] = useState(0);
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(false)
  const [type, setType] = useState(false)

  const noRefCheck = ()=> setOpen(!open)

  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb && window.tronWeb.ready) {
        setStackContract(await window.tronWeb.contract().at(STACKING_CONTRACT));  // Connect to staking contract
        setRewardContract(await window.tronWeb.contract().at(REWARD_CONTRACT));  // Connect to staking contract
        setAddress(window.tronWeb.defaultAddress.base58)
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

      contractStack.getDailyReward()
      .call()
      .then(res => {
        setReward(parseInt(res._hex)/1e18)
      })
    }
  }, [contractStack])

  const Unstake = async (_token, _unstake) => {
    if (contractStack) {
      await contractStack.claim(_token, _unstake)
      .send({ callValue: 0 })
      .then(res => {
        setContent("<h4>Success</h4> <p>Transaction Id: \n" + res + "</p>")
        setType(true)
        setOpen(true)
      })
      .catch(err =>{
        setContent("<h4>Error</h4> <p>" + err + "</p>")
        setType(false)
        setOpen(true)
      });
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.querySelector('.Header_transp');
      (window.scrollY > 150) ? header?.classList.add('scrolled') : header?.classList.remove('scrolled');
    });
  }, []);

  useEffect(() => {
    if (rewardContract) {
      rewardContract.balanceOf(address)
      .call()
      .then(res => setBalance(parseInt(res._hex)/ 1e18))
      .catch(err => console.log('err: ', err) );
    }
  }, [address]);


  const cubeIcon = <img src='favicon.png' alt="cubie" className='trxIcon' />;

  return (
    <div >
      <Head>
        <title>Cubies - My Cubies</title>
        <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Modal
        centered
        isOpen={open}
        toggle={noRefCheck} >

        <ModalHeader toggle={noRefCheck}>
          {type ? 'Success' : 'Error'}
        </ModalHeader>
        <ModalBody className="text-center">
          {/* {type ? 'Success' : 'Error'} <br /> */}
          <div dangerouslySetInnerHTML={{__html: content} }/>
        </ModalBody>
        <ModalFooter>
          <Button onClick={noRefCheck}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Header classType='Header_transp' />
      <Col className='mintcamp'>
      </Col>

      <div className='container'>
          <div className='card card-body'>
        <div className='row'>
          <div className='col-md-9'>
            <Image src={camp} />
          </div>
          <div className='col-md-3'>
            <div className='p-3'>
              <h4>Mining Camp Stats</h4>
              <hr />
              <Row>
                <Col> Connected Account: </Col>
                <Col className='py-2'> {address} </Col>
                <hr />
                <Col xs={5}> Daily Reward: </Col>
                <Col xs={7}> {reward} {cubeIcon} CUBE </Col>
                <hr />
                <Col xs={5}> Number Staked: </Col>
                <Col xs={7}> {cubies.length} {cubeIcon} CUBIEs </Col>
                <hr />
                <Col xs={5}> Cube Balance: </Col>
                <Col xs={7}> {balance} {cubeIcon} CUBE </Col>
              </Row>
            </div>
          </div>
        </div>
        </div>
            <div className='card card-body'>
              <h4>You Staked Cubies</h4>
              <hr />
              <Row>
                {cubies.map((cubie, i) => {
                  let cubie_id = cubie.name.replace('Cubie #', '')
                  cubie_id = parseInt(cubie_id)
                  // setPower(powered => powered+cubie.power)
                  contractStack.hasPaid(cubie_id)
                  .call()
                  .then(res => setHasPaid(hasPaid=>[...hasPaid, (parseInt(res._hex)/1e18)]))
                  if (cubies.length > 0) {
                    return (
                      <Col md={6} key={i}>
                        <Card>
                          <CardImg src={cubie.image} alt='Cubie Display' />
                          <CardBody>
                            <h5> <strong>{cubie.name}</strong> </h5>
                            <div className='d-flex justify-content-between align-items-center'>
                              <p> <strong>⛏️Power: {cubie.power} || {cubie.rarity} </strong> </p>
                              <p> <strong>Earned: {hasPaid[i]} </strong> </p>
                            </div>
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
  )
}
