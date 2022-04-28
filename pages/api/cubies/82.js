// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #82",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidd5jzvzd3li33o4zwpxhvljlocuwqshguzyyp5emnyf7mwf7b4um"
  })
}
