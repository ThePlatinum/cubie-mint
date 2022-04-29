// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #121",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreifltebyxwnp6gcdqtsuvneesbyrjposcd3bu42nkdrkjg6ihvbuz4"
  })
}
