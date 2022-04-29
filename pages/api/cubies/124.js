// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #124",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreifktufgkqcrswzixawjzsfj72mhxbffkplr72ysk5b7dbgy5j56mu"
  })
}
