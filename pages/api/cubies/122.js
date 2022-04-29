// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #122",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiajmifwlugx7kwoeijftegrntg45utsuiwgclqukliqskqt5umjjy"
  })
}
