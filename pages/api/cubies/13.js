// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #13",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreih5czwjui3argmyxmdsbj76tiy57dtomi2hcsxlbmbkyjiaf4s73q"
  })
}
