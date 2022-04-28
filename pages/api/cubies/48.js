// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #48",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigm2oecpg44qod3oq2plhbn2svhiwezunk353p422vwl2fjc75w4q"
  })
}
