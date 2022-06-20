const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const createRandomString = () => Math.random().toString(36).substr(2, 6)
const startingString = createRandomString()

app.listen(port)
console.log('Server listening on port:' + port)
app.get('/', (req, res) => {
  res.send('Server listening on port:' + port)
})
