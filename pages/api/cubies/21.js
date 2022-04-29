// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #21",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiapkrq3b52ufp3n2ocq6bklhk3z3q346ck4ifxpalwfrh7u2oodse"
  })
}
