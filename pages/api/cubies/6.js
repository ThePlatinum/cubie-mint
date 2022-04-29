// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #6",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://gateway.btfs.io/btfs/QmNjwc9ts93mh2RY3TKJjbDwQ4z57orwsLopTBZjd2WAxu"
  })
}
