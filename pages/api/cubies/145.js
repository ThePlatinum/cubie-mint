// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #145",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidxkv3p4jahnu7rwgvadejrxq2lf7ebwiqijs5h3lp5w36tfsbgau"
  })
}
