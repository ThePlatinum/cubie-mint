// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #26",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreicsxuapyf2rstqz7zrn54ka77tpq3mlcgt3llsoswqlh36mgno4gq"
  })
}
