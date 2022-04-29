// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #73",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidptr3n72m4c4vbtb35vskqb2i7o5vtcf4rrhmfquf2ctyig4oyfu"
  })
}
