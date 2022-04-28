// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #71",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreif56ek5rkjutr7sxqd3xiop5wiaaxgr7nn53dnavbh6qebtlkhebm"
  })
}
