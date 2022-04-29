// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #32",
    "rarity": "Epic",
    "power" : "2.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreielkmkos57tsjw5z6vrt3q2yki52i6wmyfdrnf5ygsmen7wsmytga"
  })
}
