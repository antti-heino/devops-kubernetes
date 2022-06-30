const crypto = require('crypto');
const express = require('express')
const fs = require('fs');
const path = require('path')
const axios = require('axios')
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'pong.txt')
const app = express()
const port = process.env.PORT || 3000
const input = process.env.MESSAGE

app.listen(port)
console.log('Server listening on port:' + port)

let createRandom = () => crypto.randomBytes(16).toString("hex");
let reply = Date.now() + ' ' + createRandom()
app.get('/', async (req, res) => {
	try {
		console.log('request received')
		let pongRes = await axios.get('http://pong-svc/pingpong')
		//let ts = fs.readFileSync(filePath)
		reply = input.toString() + '\n' + reply + '\n' + pongRes.data
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

