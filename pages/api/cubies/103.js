// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #103",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreihwwitmhyp54vksdenvnpgtrsfrc6disujv2rx4w63tf6iiow7z7u"
    })
} 