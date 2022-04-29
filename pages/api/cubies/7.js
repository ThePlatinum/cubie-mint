// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #7",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://gateway.btfs.io/btfs/QmSWbKTRgS9UFRQsFGHyrRG9x6m9wi6YwJpK5RgFT5Me2p"
  })
}
