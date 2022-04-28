// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #35",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreibla4p65ir4smorf2pyq5aiw66vjy6ps3hfstbkoznqth5672rjde"
  })
}
