const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello from app 2 on port 3001!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})