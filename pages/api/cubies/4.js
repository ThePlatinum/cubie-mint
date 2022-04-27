// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #4",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://drive.google.com/uc?export=view&id=18BOk-dJeYyEEAO0klEZgFVB8qZ1gGCYI"
  })
}
