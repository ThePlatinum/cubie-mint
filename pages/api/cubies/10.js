// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #10",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://gateway.btfs.io/btfs/QmeM3acxtz2h9vihcKXuwE3MYVQrK7qFYE3LZmHKCd7TNa"
  })
}
