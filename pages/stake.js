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

  const noRefCheck = () => setOpen(!open)

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
          setReward(parseInt(res._hex) / 1e18)
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
        .catch(err => {
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
        .then(res => setBalance(parseInt(res._hex) / 1e18))
        .catch(err => console.log('err: ', err));
    }
  }, [address]);


  const cubeIcon = <img src='favicon.png' alt="cubie" className='trxIcon' />;
  const walletIcon = <img src='wallet.png' alt="Conneted Wallet" className='trxIcon' />;

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
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
        <div className='card card-body bg-light'>
          <div className='row'>
            <div className='col-md-8'>
              <Image src={camp} />
            </div>
            <div className='col-md-4 '>
              <div className='card card-body m-0'
                style={{
                  'backgroundColor':'#00224170',
                  'color':'white'
                }}>
                <Row>
                <h4 className='m-0'>Mining Camp Stats</h4>
                <hr className='my-2'/>
                  {/* <Col> Connected Account: </Col> */}
                  <Col className='py-2'> {walletIcon} {address} </Col>
                  <hr className='my-2'/>
                  <Col xs={4}>
                    <img src='favicon.png' alt="cubie" width='70%' className='p-2'/>
                  </Col>
                  <Col xs={8} className='d-flex flex-column justify-content-center'>
                    <h4>Daily Reward</h4>
                    <h6>{reward} CUBE</h6>
                  </Col>
                  <hr className='my-2'/>
                  <Col>
                    <h6>Number Staked:</h6>
                    <div style={{
                      'backgroundColor':'#00224170',
                      'color':'white',
                      'padding':'1vh 1vw',
                      'borderRadius':'5px',
                      'display':'flex',
                      'justifyContent':'space-between'
                    }}>
                    {cubies.length}
                    <div>{cubeIcon} &nbsp; CUBIE</div>
                    </div>
                    <h6 className='mt-2'>Cube Balance: </h6>
                    <div style={{
                      'backgroundColor':'#00224170',
                      'color':'white',
                      'padding':'1vh 1vw',
                      'borderRadius':'5px',
                      'display':'flex',
                      'justifyContent':'space-between'
                    }}>
                    {balance}
                    <div>{cubeIcon} &nbsp; CUBE&nbsp;</div>
                    </div>
                    </Col>
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
                .then(res => setHasPaid(hasPaid => [...hasPaid, (parseInt(res._hex) / 1e18)]))
              if (cubies.length > 0) {
                return (
                  <Col md={4} key={i}>
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
