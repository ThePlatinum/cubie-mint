// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #9",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://gateway.btfs.io/btfs/QmZEhxDiseHAg4gMw9DvYUeNGT3E1jwn5GMZ6w8b9iGUhL"
  })
}
