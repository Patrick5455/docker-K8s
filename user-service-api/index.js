const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    name:'Patrick Ojunde',
    email:'patrickojunde@gmail.com'
  },
  {
    name:'Pat',
    email:'pat@gmail.com'
  },
  {
    name:'alice',
    email:'alice@gmail.com'
  } 
  ])
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})