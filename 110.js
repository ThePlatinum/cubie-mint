// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #110",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreigzvvvu6usdqxbitvphqtyyyovuo3vsugssknzgzbrfec3cozj4w4"
    })
} 