// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #6",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://drive.google.com/uc?export=view&id=1Hr_lBY-8nvAHGUulCBO2yWQQnOqZcJmY"
  })
}
