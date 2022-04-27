import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mint from '../components/Mint';
import { useState, useEffect } from 'react';

export default function Mints() {

  const [contract, setContract] = useState(null)
  const CONTRACT_ADDRESS = 'TQFM2CJA5x3JxnJRLSJVCwo9nch1bbbeEG' 
  //'TJ3ZpFJJsdhqubCmn3G8pJ3SDta7huMoVd'
  //'TKQ9tmuCJP6Ed988bqHUHmZmQRUhmujaY6' 
  //'TH48JDDW8hbC35jdfBccZBnhWbmYvfGc36'
  //'TETXkMKtDSL3d52ofvRqnU7p4fuiVNEp4X';

  useEffect(() => {
    const interval = setInterval(async () => {
      if (window.tronWeb && window.tronWeb.ready) {
        setContract(await window.tronWeb.contract().at(CONTRACT_ADDRESS));  // Connect to contract
      }
      clearInterval(interval);
    }, 2000);
  }, []);

  return (
    <div >
      <Head>
        <title>Cubie - Mint</title>
        <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Mint contract={contract} />
    </div>
  )
}
