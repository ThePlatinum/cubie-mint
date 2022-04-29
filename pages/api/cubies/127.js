// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #127",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreie3ppoa3e4qmetnekf337brz2kvew4twodjxt2kxhejeyrzaoatsm"
  })
}
