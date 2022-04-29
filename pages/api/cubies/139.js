// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #139",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidufot2r6w6iams4kbgfjmi7w77erm666kakdp3wzkhx4ydfhf4va"
  })
}
