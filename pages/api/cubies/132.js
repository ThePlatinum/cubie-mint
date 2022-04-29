// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #132",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreih2vfof7xwsl4kmrebb26jfa4yngduex7zy4wqt3p3j6iu6lhntrq"
  })
}
