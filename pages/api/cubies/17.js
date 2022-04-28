// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #17",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreicufj2pakdvvk2cmcvhkyz7fgwknn7mqtst3q3mfb5uqztvnrffx4"
  })
}
