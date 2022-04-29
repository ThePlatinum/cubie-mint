// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #77",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreign5v5bazoqxb7s24iuj7s3iwrehv3at3s4afcyzwwz77b7x26c64"
  })
}
