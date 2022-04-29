// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #131",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreif4itw5mi2bcisf2gwmgehi7th5hng5uvuvthxcyw2hpfaq6dcgu4"
  })
}
