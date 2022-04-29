// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #125",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigbvvxhle2tt2sx4mizdhbwcgnjhbmbdioav2efvwjthxwqfiggxe"
  })
}
