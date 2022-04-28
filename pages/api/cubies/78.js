// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #78",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreieu5u6b6uq7ahrqq4qke2f4kotzep34ci3bdjrzh6ao2otu264q5i"
  })
}
