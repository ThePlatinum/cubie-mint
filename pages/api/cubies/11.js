// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #11",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://gateway.btfs.io/btfs/QmXM4nvFR9MMNcoPBUopxcKthiKYRYgJXSZEv3VrWY9zfc"
  })
}
