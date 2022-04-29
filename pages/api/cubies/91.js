// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #91",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreifqqnok5p4hsolwju2cdbipc5sgryoksunjow35myk7lqvpcuvp7u"
    })
} 