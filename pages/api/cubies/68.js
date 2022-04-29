// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #68",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidcsr7kzn5tnjqvt2hmp3trcwwim74fixbh3f7yvzkvng24u5rwve"
  })
}
