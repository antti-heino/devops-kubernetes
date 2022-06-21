const crypto = require('crypto');
const express = require('express')
const fs = require('fs');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
app.listen(port)
console.log('Server listening on port:' + port)

let createRandom = () => crypto.randomBytes(16).toString("hex");
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'hash.txt')

app.get('/', (req, res) => {
	try {
		let ts = fs.readFileSync(filePath)
		let hash = createRandom()
		console.log(`Replying: ${ts.toString} ${hash}`)
		res.send(ts + ' ' + hash)
		} catch (error) {
			console.log(error)
		}
})