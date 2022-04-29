// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #113",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreidmnbkbs2qndqtlxc4hfdmay2s77iuqn6wvchohlvbokzzt3tvpzu"
    })
} 