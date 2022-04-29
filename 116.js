// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #116",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreicn7lsnv23vwlcm2fhaut2h3bwlqrjwkrhxyh4kzh7v5nlj7blwfi"
    })
} 