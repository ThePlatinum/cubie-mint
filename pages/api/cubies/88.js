// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #88",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreigqzmncm5cmtr2tsmn57faba5exuqzmftcal2ziqib2y5hyjxdaxe"
    })
  }