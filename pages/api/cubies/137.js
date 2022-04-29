// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #137",
    "rarity": "Legendary",
    "power" : "3",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiguajxhzeknlrzef4atjekhzfqodlsqkzszm4ode3jdu6u6u4hdsm"
  })
}
