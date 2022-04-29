// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #106",
      "rarity": "Epic",
      "power" : "2.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreicps6po6pyr6mapb2tv5slpbxfzmn3yf2abl4sdyb6lhpg3f4pjda"
    })
} 