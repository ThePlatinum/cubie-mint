// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #41",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreig3i6iz42eggj4b3v2p4gcii5ewphwg7anoow35epvrq6wdvx4ymu"
  })
}
