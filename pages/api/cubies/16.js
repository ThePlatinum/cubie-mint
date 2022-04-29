// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #16",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiguln7qpvcodigq5ah7sa2dxm66ccof73lgunlwafhc4kmxpjkmza"
  })
}
