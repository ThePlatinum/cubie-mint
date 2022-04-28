// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #57",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreibiwvzebsv7thve6sdqzql5lxmrf5enw5xbkp45brsretfl3jw564"
  })
}
