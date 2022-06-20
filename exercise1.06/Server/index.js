const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const createRandomString = () => Math.random().toString(36).substr(2, 6)
const startingString = createRandomString()

app.listen(port)
console.log('Server listening on port:' + port)
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h2>This is a reply!</h2>'));
})
