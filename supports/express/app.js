const express = require('express')
const app = express()
const port = 3000
const numer = require("numer.js");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(numer.compactNumber(22200000))
  console.log(`Example app listening at http://localhost:${port}`)
})
