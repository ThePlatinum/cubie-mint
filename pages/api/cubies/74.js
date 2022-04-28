// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #74",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigz6i3hfstwvsrbmsbg2wvpibhfj6g742eudgcpfgzugsrsqyu2ve"
  })
}
