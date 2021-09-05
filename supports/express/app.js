const express = require('express')
const app = express()
const port = 3000
const numer = require("numer.js")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(numer.addCommas(22200000))
  console.log(numer.abbreviate(1100000, 2))
  console.log(numer.convertToOrdinal(1))
  console.log(`App listening at http://localhost:${port}`)
})
