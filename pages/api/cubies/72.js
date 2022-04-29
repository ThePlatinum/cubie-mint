// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #72",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreic2l2kjnvqiwkitnzrt2sbc3a5v6bzcekmsc72oonrywccwto2v2y"
  })
}
