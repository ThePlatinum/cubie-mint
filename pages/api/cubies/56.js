// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #56",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiayskf5pau5r5u77m6r25qtd4r5v3ojfw6mbmf43jo7jokcdqlvzi"
  })
}
