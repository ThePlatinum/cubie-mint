// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #87",
      "rarity": "Rare",
      "power" : "2",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreidtcpn7lpjjobqhlsyb6nxbntp4tppo2tu7cxe36yi5yndnzlgadq"
    })
  }