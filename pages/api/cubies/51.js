// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #51",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreifuh6nbtge6go7km5mpmliuaqdrdwh2bjmzlg2t4dzgu53imh2qyy"
  })
}
