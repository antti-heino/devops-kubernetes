const crypto = require('crypto');
const express = require('express')
const fs = require('fs');
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
app.listen(port)
console.log('Server listening on port:' + port)

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'hash.txt')

let createRandom = () => crypto.randomBytes(16).toString("hex");
let reply = Date.now()

app.get('/date', (req, res) => {
	console.log(`Replying: ${reply}`)
	res.send(reply)
  })

setInterval(() => {
	reply = Date.now()// + ' ' + createRandom()
	console.log(reply)
	try {
		fs.writeFileSync(filePath, reply.toString(), { flag: 'w+' });
	  } catch (err) {
		console.error(err);
	  }
}, 5000)

