// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #79",
    "rarity": "Legendary",
    "power" : "3",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidzxaasfbjgcattepl2k7zaebydsxkywz2otktuqky5vq6xkw4uqi"
  })
}
