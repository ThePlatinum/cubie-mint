// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #123",
    "rarity": "Legendary",
    "power" : "3",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreibtu3g5pfzmp6vtj7caxslgcr7mbxsoibgskreghqvcpywnxw5w6i"
  })
}
