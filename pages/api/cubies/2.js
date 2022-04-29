// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #2",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://gateway.btfs.io/btfs/QmPVT7X8qSokxdZmhaMTKuTwM1qLNvfv7bXnu9yFaxm8Nf"
  })
}
