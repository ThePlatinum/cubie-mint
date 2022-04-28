// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #54",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreibcnihzbnh4g72qkjwvjsr3lh72e7excbxji7bjxqfiqezutomhpi"
  })
}
