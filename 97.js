// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #97",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreibm7yqogvbazenw4grtl6bv2iqyxmh733hfhjyn2ouist4kvnhylm"
    })
} 