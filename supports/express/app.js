const express = require('express')
const app = express()
const port = 3000
const Numer = require("numer.js")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  const obj = new Numer({ style: 'comma' });
  console.log(obj.format(1000000));
  console.log(new Numer({ style: 'abbreviation' }).format(9812730));
  console.log(new Numer({ style: 'ordinal' }).format(1));
  console.log(`App listening at http://localhost:${port}`)
})
