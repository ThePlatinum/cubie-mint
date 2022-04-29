// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #115",
      "rarity": "Epic",
      "power" : "2.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreic6gbmc4pv56tfealrfkwkkqaotmhs5dz4xb2k3z6ouh2hn2n5l3e"
    })
} 