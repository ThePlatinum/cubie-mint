// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #24",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreihvolpek2ut5dobl4crpremmsy3mkczjg5onxhtbyw3tadwkjvrti"
  })
}
