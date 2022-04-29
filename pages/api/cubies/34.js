// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #34",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiea2rlcqq7yo3axfichsgwiapdlrg7mkl6hth4onpfdybft2lfnoy"
  })
}
