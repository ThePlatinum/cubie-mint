// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #109",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreibiosmktuexv3sl57jpom4eactikuiyxlwqmveye6qtm4lrjmmgsq"
    })
} 