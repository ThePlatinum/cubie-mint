// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "name"  : "Cubie #101",
      "rarity": "Unique",
      "power" : "1.5",
      "image" : "https://ipfs.filebase.io/ipfs/bafkreigxdizqz2zvsrneps5bybwt6k3tk7kh6uhrjxkbq5t2sntfnl7rki"
    })
} 