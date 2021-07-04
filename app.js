const express = require('express')
const recipeScraper = require('recipe-scraper')
const fetch = require('node-fetch')
const mysql = require('mysql')

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create and send recipeScraper promise
app.get('/getRecipe/:url/', (req, res) => {
  var url = req.params.url
  recipeScraper(url).then(recipe => {
      res.send(recipe)

    }).catch(error => {
      console.log(error.message)
  })
})

// Display open detail.html and fetch /getRecipe?url=some-url.com on the client
app.get('/details', (req, res) => {
  var url = req.query.url
  res.sendFile(__dirname + '/public/details.html')
})

var connection = mysql.createConnection({
  host: '172.17.197.7',
  user: 'colin',
  password: 'toor',
  database: 'killerr'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

connection.end()

app.listen(port, () => {
  console.log(`Killer.Recipes web scraper listening at http://localhost:${port}`)
})