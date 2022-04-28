// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #29",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreietr5tjdktarcssryugyu54ifqo3f3jdxej47grd4ma2jo3ytgaqq"
  })
}
