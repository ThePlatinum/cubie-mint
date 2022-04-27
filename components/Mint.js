import { Button, Card, CardImg, Col, Input, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Mint({ contract }) {

  const navigate = useRouter()
  const [mintAmmount, setMintAmmount] = useState(1);
  const [walletStatus, setWalletStatus] = useState("Loading...");
  const [mintBtnStat, setMintBtnStat] = useState(true)
  const [max, setMax] = useState(4);
  const [totalMinted, setTotalMinted] = useState(0);
  const [alreadyMintedIds, setAlreadyMintedIds] = useState([]);
  const [err, setErr] = useState('')

  const [TronWeb, setTronWeb] = useState(null);

  const alreadyMinted = async () => {
    if (contract != null) {
      contract.totalSupply().call().then(res => {
        setTotalMinted(res.toNumber())
        console.log('setTotalMinted: ', totalMinted);
        setMax(150 - totalMinted >= 4 ? 4 : 150 - totalMinted)
        console.log('setMax: ', max);
      })
      contract.totalSupplyId().call().then(res => {
        setAlreadyMintedIds(res)
        console.log('setAlreadyMintedIds: ', alreadyMintedIds);
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
    // let rand = newArr[Math.floor(Math.random() * newArr .length)];
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

  const extension = () =>  open('https://chrome.google.com/webstore/detail/tron-wallet/ibnejdfjmmkpcnlpebklmnkoeoihofec')

  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb) {
        if (window.tronWeb.ready) {
          setWalletStatus("Mint");
          setMintBtnStat(false)
          alreadyMinted();
          setTronWeb(window.tronWeb);
        } else setWalletStatus("Login your TronLink wallet");
      } else setWalletStatus("Tron Link not Installed");
      clearInterval(interval);
    }, 2000);
  }, []);

  const trxIcon = <img src='/trx-red.svg' alt="trx" className='trxIcon' />;

  return (
    <div>
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
            <Input type='number' value={mintAmmount} onChange={() => { }} />
            <Button onClick={() => { if (mintAmmount > 0 && mintAmmount <= max - 1) setMintAmmount(mintAmmount + 1) }} >+</Button>
          </Col>
          <Col className='verticalCenter' md={6}><h5>{max} Max</h5></Col>
        </Row>
      </Card>
      <Col className='totalDisplay'>
        Total Price: <h5>{mintAmmount * 4000} TRX {trxIcon} </h5>
      </Col>
      <Col> <p className='text-center' >{err}</p> </Col>
      <Col>{(TronWeb && contract) ? <Button block onClick={() => mint()} disabled={mintBtnStat} > {walletStatus} </Button> : <Button block onClick={() => extension()}> {walletStatus} </Button>} </Col>
    </div>
  );
}
