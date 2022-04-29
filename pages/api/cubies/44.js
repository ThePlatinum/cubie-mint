// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #44",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreid7vgx5mdzed3xdiporaj5trrhxcv5w77ofkjblk7m6opr6csksdm"
  })
}
