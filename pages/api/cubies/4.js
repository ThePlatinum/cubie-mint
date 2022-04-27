// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #4",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://gateway.btfs.io/btfs/Qmd6p3c4BSA8y2K46BRTCQSMWPkmm92uqUM186Bk7AScRr"
  })
}
