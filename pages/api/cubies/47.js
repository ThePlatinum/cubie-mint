// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #47",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreifcqbkm5kb5qtpxpd6utacozv6grjvqgdbcgzvvhvj756jxlk5g7i"
  })
}
