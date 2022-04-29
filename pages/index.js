import Head from 'next/head'
import { Button, Card, CardImg, Col, Input, Row } from 'reactstrap';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Mints() {

  const navigate = useRouter()
  const [mintAmmount, setMintAmmount] = useState(1);
  const [walletStatus, setWalletStatus] = useState("Loading...");
  const [mintBtnStat, setMintBtnStat] = useState(true)
  const [max, setMax] = useState(4);
  const [totalMinted, setTotalMinted] = useState(0);
  const [alreadyMintedIds, setAlreadyMintedIds] = useState([]);
  const [err, setErr] = useState('')

  const [TronWeb, setTronWeb] = useState(null);
  const [contract, setContract] = useState(null)
  const CONTRACT_ADDRESS = 'TQFM2CJA5x3JxnJRLSJVCwo9nch1bbbeEG' 
  //'TJ3ZpFJJsdhqubCmn3G8pJ3SDta7huMoVd'
  //'TKQ9tmuCJP6Ed988bqHUHmZmQRUhmujaY6' 
  //'TH48JDDW8hbC35jdfBccZBnhWbmYvfGc36'
  //'TETXkMKtDSL3d52ofvRqnU7p4fuiVNEp4X';


  const alreadyMinted = async () => {
    if (contract != null) {
      contract.totalSupply().call().then(res => {
        setTotalMinted(res.toNumber())
        setMax(150 - totalMinted >= 4 ? 4 : 150 - totalMinted)
      })
      contract.totalSupplyId().call().then(res => {
        setAlreadyMintedIds(res)
      })
    }
  }

  const random = () => {
    const allId = Array.from({ length: 150 }, (_, i) => i + 1) // array which holds all values
    let alreadyMintedIdsInt = []
    alreadyMintedIds.map(id => alreadyMintedIdsInt.push(parseInt(id._hex)))

    const toDeleteSet = new Set(alreadyMintedIdsInt); //
    const newArr = allId.filter(remained => {
      return !toDeleteSet.has(remained);
    });

    const shuffled = newArr.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, mintAmmount);
    return selected;
  }

  const mint = async () => {
    setMintBtnStat(true)
    setWalletStatus("Loading...")
    let cost = mintAmmount * 4000000;
    if (contract != null) {
      let idsToMint = random()
      // const preSold = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48,50,51,52,53,54,55,56,57,58,59,60,115,139,140]
      await contract.safePublicMint(TronWeb.defaultAddress.base58, idsToMint)
        .send({ callValue: cost })
        .then(res => navigate.push( '/my-cubies' ) )
        .catch(err => {
          setErr(err)
          setMintBtnStat(false)
          setWalletStatus("Mint")
        });
      alreadyMinted()
    }
  }

  const extension = ()=> open('https://chrome.google.com/webstore/detail/tron-wallet/ibnejdfjmmkpcnlpebklmnkoeoihofec')

  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb) {
        if (window.tronWeb.ready) {
          setWalletStatus("Mint");
          setMintBtnStat(false)
          alreadyMinted();
          setTronWeb(window.tronWeb);
          setContract(await window.tronWeb.contract().at(CONTRACT_ADDRESS));  // Connect to contract
        
        } else setWalletStatus("Login your TronLink wallet");
      } else setWalletStatus("Tron Link not Installed");
      clearInterval(interval);
    }, 2000);
  }, []);

  useEffect(() => {
    if(contract != null) {
      contract._tokensOfOwner(window.tronWeb.defaultAddress.base58).call().then(res => {
        if (res.length >= 4) {
          navigate.push( '/my-cubies' )
        }
      })
    }
  }, [contract])

  const trxIcon = <img src='/trx-red.svg' alt="trx" className='trxIcon' />;

  return (
    <div >
      <Head>
        <title>Cubie - Mint</title>
        <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className='marque mb-3 p-3'>
        <marquee>
          {'\u26A1'}{'\u26A1'} {'\u2728'} Minting is live {'\u2728'}{'\u26A1'}{'\u26A1'} 
        </marquee>
      </div>

      <div className="Banner">
        <h2>Mint Cubie</h2>
        <p>Enter how many Cubies you would like to mint</p>
      </div>

      <Card className='priceDisplay card-body'>
        <Row>
          <Col md={6}>
            <CardImg src='/Mint_Cubie.gif' alt='Cubie Display' autoPlay={true} loop={true} />
          </Col>
          <Col md={6} className='verticalCenter'>
            <p>Price</p>
            <h5>{trxIcon} 4000 TRX Each</h5>
          </Col>
        </Row>
      </Card>
      <Card className='ammountSelect card-body'>
        <Row>
          <Col className='oneLine' md={6}>
            <Button onClick={() => { if (mintAmmount >= 2) setMintAmmount(mintAmmount - 1) }} >-</Button>
            <Input type='number' value={mintAmmount} />
            <Button onClick={() => { if (mintAmmount > 0 && mintAmmount <= max - 1) setMintAmmount(mintAmmount + 1) }} >+</Button>
          </Col>
          <Col className='verticalCenter' md={6}><h5>{max} Max</h5></Col>
        </Row>
      </Card>
      <Col className='totalDisplay'>
        Total Price: <h5>{mintAmmount * 4000} TRX {trxIcon} </h5>
      </Col>
      <Col> <p className='text-center' >{err}</p> </Col>
      <Col>{contract ? <Button block onClick={() => mint()} disabled={mintBtnStat} > {walletStatus} </Button> : <Button block onClick={() => extension()}> {walletStatus} </Button>} </Col>
    
    </div>
  )
}
