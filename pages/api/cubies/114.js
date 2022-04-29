// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #114",
      "rarity": "",
      "power" : "2",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreidyzygwpmoubfpi56ibkvu4rldnblt3k5rhpgduhe43v4qb7ltg24"
    })
} 