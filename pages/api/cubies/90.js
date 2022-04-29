// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #90",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreig4csj2vyz442f4rbpgi7xsr4kihybl5zdcrrbjopqvgdxgjfapza"
    })
}