// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #128",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigqr3wyxfq74sldtj4j7qun6vufl2gwh5aee4j26mqx46lksjsnq4"
  })
}
