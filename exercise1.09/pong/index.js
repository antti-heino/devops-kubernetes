const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.listen(port)
console.log(`Pingpong listening to port: ${port}`)
let count = 0

app.get('/pingpong', (req, res) => {
  console.log(`Replying: ${count}`)
  res.send(`pong ${count}`)
  count++
})