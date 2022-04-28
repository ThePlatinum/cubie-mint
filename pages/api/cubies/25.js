// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #25",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreifbux6fuov2wj7hgjog7xwq33ofykq4n5qx7jjccbuntyjsyemheu"
  })
}
