// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #28",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiagjf66mahxc535xk4ygybxhwec2qahk3lass777zjywxy4kgx6p4"
  })
}
