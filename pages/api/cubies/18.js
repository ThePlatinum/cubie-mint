// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #18",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigq3y5ddbgwmti44xhxzoekmyj4b4e7ekuyw5wbh37yjq6n32fyoy"
  })
}
