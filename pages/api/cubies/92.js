// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #92",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreigkbbb5tnbjffewxh7outolw6gtjncd337hulxiuknuzkg2qbo5p4"
    })
} 