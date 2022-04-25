// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #1",
    "rarity": "Epic",
    "power" : "3",
    "image" : "https://drive.google.com/file/d/1uE8jP1oydBl5igpo1Qt_xiTTwfVBmVKG/view?usp=sharing"
  })
}
