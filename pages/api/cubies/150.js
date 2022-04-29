// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #150",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreibdezkfvludoovctwbqvg4qdbtxxnjtf65rwbz47agnuuehqtepb4"
  })
}
