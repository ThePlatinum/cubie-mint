// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #65",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreicljksxjpbb3shk4etlqbnfoiip2ryrnlw4b45j6bxwmp3glcsaf4"
  })
}
