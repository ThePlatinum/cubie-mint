// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #85",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiecwmkrumabq6apgl7uqseo3r4bnwlgjoc32xcb7k6di24xysouka"
  })
}
