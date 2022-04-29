// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #138",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiayafl3ghbq7lanmiwcfq2ee3fjgjg5abln5ndyq7vvz4qidgpdhu"
  })
}
