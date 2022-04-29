// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #129",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreic4vzlxe7q5hfjcxcyervncskwbb3d5ta6nygrw7omrql3zxj3owi"
  })
}
