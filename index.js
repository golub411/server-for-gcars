const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public')));

const cards = [
  {photo: 'http://localhost:4000/images/gls.jpg', year: "2020",model: "class gls", mark: "mersedes-benz", id: "1", color: "white", description: "Надёжный внедорожник", price:"19 000 000 руб"},
  {photo: 'http://localhost:4000/images/cclass_white.jpg', year: "2022",model: "class c", mark: "mersedes-benz", id: "2", color: "white", description: "Элегантный седан", price:"10 000 000 руб"},
  {photo: 'http://localhost:4000/images/sclass_black.jpg', year: "2021",model: "class s", mark: "mersedes-benz", id: "3", color: "black", description: "Седан премиум класса", price:"17 000 000 руб"},
]

app.get('/', (req, res) => {
  res.json(cards)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})