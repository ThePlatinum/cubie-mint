// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #19",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigdyrwlkz6bxemdpb5bqy5zbihh5dawr2ngou734paieqsakgyb5q"
  })
}
