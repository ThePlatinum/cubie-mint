// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #43",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreiarngbhfdrmkhzvadjcpose44wb27yt4qrrcv5j46o434hpicxlm4"
  })
}
