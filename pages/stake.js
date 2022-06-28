import { useState, useEffect } from 'react';
import Head from 'next/head'
// import Approval from '../components/approval';

export default function Stake() {

  const [contractStack, setStackContract] = useState(null)
  const STACKING_CONTRACT = 'TMPSjuEgF5p3BV7aA1fgJV3x87kgSPhN55'

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
      contractStack._tokensOfOwner(window.tronWeb.defaultAddress.base58).call().then(res => {
        res.map(cubie => {
          console.log('cubie: ', cubie);
        })
      })
    }
  }, [contractStack])
 
  return (
    <div >
      <Head>
        <title>Cubies - My Cubies</title>
        <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <Approval /> */}

    </div>
  )
}
