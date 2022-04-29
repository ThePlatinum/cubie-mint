// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #1",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://gateway.btfs.io/btfs/QmY676f5ytZrmyrjm5XdfeN5vZx6JaKs5p1vx6UcjmMp6n"
  })
}
