const crypto = require('crypto');
const express = require('express')
const fs = require('fs');
const path = require('path')
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'pong.txt')
const app = express()
const port = process.env.PORT || 3000

app.listen(port)
console.log('Server listening on port:' + port)

let createRandom = () => crypto.randomBytes(16).toString("hex");
let reply = Date.now() + ' ' + createRandom()

app.get('/', (req, res) => {
	try {
		let ts = fs.readFileSync(filePath)
		reply = reply + '\n' + ts
		console.log(`Replying: ${reply}`)
		res.send(reply)
	} catch (error) {
		console.log(error)
	}
  })

setInterval(() => {
	reply = Date.now() + ' ' + createRandom()
	console.log(reply)
}, 5000)

