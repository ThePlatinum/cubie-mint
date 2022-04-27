// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #3",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://gateway.btfs.io/btfs/QmQWuV1rwjW59BVXWFrZYfoS35VSrUyBhUfVCv5MTEJBSU"
  })
}
