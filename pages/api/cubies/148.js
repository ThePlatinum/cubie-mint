// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #148",
    "rarity": "Legendary",
    "power" : "3",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreid5favh76rbjeppjdn2f3r6wtmfvexsrhvkhdrnnf56aga25ocadu"
  })
}
