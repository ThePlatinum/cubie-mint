// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #59",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiffg4lhxgqipn5rzodz5rddbjju4sl7wcjzv75zhkpkn3735z4mpi"
  })
}
