// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #108",
      "rarity": "Rare",
      "power" : "2",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreicwfdlcpxk32zamcdjzg2n3fo3zjbeo75cip3ewvlgl5phknuhble"
    })
} 