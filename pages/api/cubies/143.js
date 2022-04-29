// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #143",
    "rarity": "Legendary",
    "power" : "3",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiaqc34sh3x3mwj3dbkvpth4h5hqbttobxjy4aowz5ybxs56ma3csm"
  })
}
