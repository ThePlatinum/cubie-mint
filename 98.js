// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #98",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreidem5ac7u7ufrcvqofup3yl2wspqjrhi3cqrtebgpe5ujdfpy24xy"
      
    })
} 