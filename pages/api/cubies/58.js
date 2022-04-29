// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #58",
    "rarity": "Legendary",
    "power" : "3",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiggbmpcn2gabojjv5qzaq2wuehacwrmjzyh2kcqjxfnmjptwtd5hi"
  })
}
