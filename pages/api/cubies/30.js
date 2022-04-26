// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #30",
    "rarity": "Epic",
    "power" : "3",
    "image" : "https://drive.google.com/uc?export=view&id=1uE8jP1oydBl5igpo1Qt_xiTTwfVBmVKG"
  })
}
