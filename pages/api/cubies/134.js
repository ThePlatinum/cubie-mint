// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #134",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreidcrbqbfsn2r7baibppntrk5qoumokicuof5rqc2lhefojylf7exi"
  })
}
