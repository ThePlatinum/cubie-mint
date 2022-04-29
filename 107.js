// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #107",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreideriri7axgzvmml73rf6kkppglpvnqo7cixwt75qqmf2dx4xylea"
    })
} 