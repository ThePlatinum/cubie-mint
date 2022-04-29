// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #89",
      "rarity": "Normal",
      "power" : "1",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreifvjeyhdw7eyrmsa62mxhshdwswwhzw2otzbtqc4rfq75e3cljexq"
    })
}