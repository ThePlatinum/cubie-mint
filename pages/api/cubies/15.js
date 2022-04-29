// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #15",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidihq7bmr2wjafw5s7k4xkghd5kmthqa44xtys2toa5qsrwtniyvm"
  })
}
