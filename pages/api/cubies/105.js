// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #105",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreibwjpfiq4scdu3cv3ccjzrr3s4w6mesaiduqqptyenao6fafww3ri"
    })
} 