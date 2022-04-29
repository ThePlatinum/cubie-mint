// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #141",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidd2m5uomyylf46ba45tnd3raiyw2mktp2nyfeqs6gykdubtic3r4"
  })
}
