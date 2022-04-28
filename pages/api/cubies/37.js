// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #37",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreig2wsxfiniqwmcjwrpozrn4xmyhxbe37cvcywszsxwabggaxfuvmi"
  })
}
