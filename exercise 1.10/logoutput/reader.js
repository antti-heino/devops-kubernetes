const crypto = require('crypto');
const express = require('express')
const fs = require('fs');
const app = express()
const port = process.env.PORT || 3000
app.listen(port)

let createRandom = () => crypto.randomBytes(16).toString("hex");
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'hash.txt')

app.get('/readhash', (req, res) => {
  let ts = fs.readFileSync(filePath)
  let hash = createRandom()
  console.log(`Replying: ${ts} ${hash}`)
  res.send(ts + ' ' + hash)
})