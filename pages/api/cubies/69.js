// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #69",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidfn3rte7ht7skpkn5qikghyyuyk5hdxfepq6xb7owlhxdrveqyii"
  })
}
