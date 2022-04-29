// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #135",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiebwcmwqeyrua476cu7vmtzzrof7lcfzrqyps2ws23jdxle7rfbfa"
  })
}
