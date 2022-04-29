// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #118",
      "rarity": "Unique",
      "power" :"1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreiaqghawppfeiswqcvf3hpdyybjovfsmiawg4mhzri5nrbitto42gy"
    })
} 