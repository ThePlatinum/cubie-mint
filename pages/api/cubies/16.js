// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #16",
    "rarity": "Rare",
    "power" : "3",
    "image" : "https://drive.google.com/uc?export=view&id=1QX6mjm_wJvhnaZjxLe0EoZS-QUwc136X"
  })
}
