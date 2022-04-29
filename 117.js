// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #117",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreic4lrnaasor3xiohe4ok2lmom2xy7kmzowxxqfgoswpwhv5dsx4nu"
    })
} 