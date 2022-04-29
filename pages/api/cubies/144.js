// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #144",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreighzok3r3q4utzu2hgnt6rdngecvfm6iad6djs2a5rfuvcghhwszm"
  })
}
