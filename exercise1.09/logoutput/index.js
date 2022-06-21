const crypto = require('crypto');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.listen(port)
console.log('Server listening on port:' + port)

let createRandom = () => crypto.randomBytes(16).toString("hex");
let reply = Date.now() + ' ' + createRandom()

app.get('/', (req, res) => {
	console.log(`Replying: ${reply}`)
	res.send(reply)
  })

setInterval(() => {
	reply = Date.now() + ' ' + createRandom()
	console.log(reply)
}, 5000)

