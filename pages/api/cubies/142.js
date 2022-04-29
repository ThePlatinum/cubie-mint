// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #142",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreighfkjhxt3rf7rvryrzl4pn5ychj2fbrnlljexjjrjedfla6mu4aq"
  })
}
