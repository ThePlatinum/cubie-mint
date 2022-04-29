// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #112",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreihja5hqbdcuapzg5bc43i74pshbqfshgjiz3wgrcv6f3f2gcysrvi"
    })
} 