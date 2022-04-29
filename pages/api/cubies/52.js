// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #52",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigmaaugi2zzbidz3cokogavm5yzfcnuy2anejvzsupt6p7kcqvyay"
  })
}
