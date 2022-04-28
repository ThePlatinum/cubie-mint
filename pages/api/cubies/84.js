// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #84",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreie2rkshj43ng2j64sapy6y3xmy6j5mpycxzdr67kxx7soma6qaupa"
  })
}
