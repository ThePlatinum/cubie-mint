// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #8",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://gateway.btfs.io/btfs/QmYqr3SyM6jZ798FVHstj6U9PG6m8bDJxwDwqe3G5tyBkd"
  })
}
