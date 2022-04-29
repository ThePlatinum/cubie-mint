// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #5",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://gateway.btfs.io/btfs/QmcETNn3g1mH144DSeRQYjfaWaEVx9NATC8Euv6473vs1h"
  })
}
