const express = require('express')
const fs = require('fs');
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'pong.txt')

app.listen(port)
console.log(`Pingpong listening to port: ${port}`)
let count = 0

app.get('/pingpong', (req, res) => {
  console.log(`Replying: ${count}`)
  try {
		fs.writeFileSync(filePath, `pong ${count}`, { flag: 'w+' });
	  } catch (err) {
		console.error(err);
	  }
  res.send(`pong ${count}`)
  count++
})