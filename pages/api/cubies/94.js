// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #94",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreife27644cuu6ayfuv6cp4nfkofm5mrnklh6v7skd4gzydv265r3ku"
    })
} 