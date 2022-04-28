// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #42",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreihkwzbhrafqmrh4a5jvg3idgu7gz4qwqjf3tplwaha7lj3ykvaiqi"
  })
}
