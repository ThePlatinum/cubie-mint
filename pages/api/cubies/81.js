// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #81",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreih54kymu5hwskoevi6yoadwqtcnnjjcjcd3cqyaqunwcdoyvjo6au"
  })
}
