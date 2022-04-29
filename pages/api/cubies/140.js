// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #140",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreifxivqzari5fcokp7ft3mr6bpdgioncsgv34tp3hgonhg57yuqbt4"
  })
}
