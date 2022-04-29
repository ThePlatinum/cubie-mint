// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #20",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigni3tcjdw2okysp4g2f5mu3qzm2j3gtuzqagl7ksgvbq6oog6dai"
  })
}
