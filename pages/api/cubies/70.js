// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #70",
    "rarity": "Normal",
    "power" : "1",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreihm6ddspd44sn2qhd4mz75jqln3ao6gm7vxvkosnqotkb4mtc3x3i"
  })
}
