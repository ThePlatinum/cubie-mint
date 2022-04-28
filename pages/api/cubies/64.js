// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #64",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreihgmtobqjpyru37btd5kz2obmyuekqqb5ud7fmnmnraetzssguvcq"
  })
}
