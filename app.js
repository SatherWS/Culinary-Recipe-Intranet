const express = require('express')
const recipeScraper = require('recipe-scraper')
const fetch = require('node-fetch')
// const mysql = require('')

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

app.post('/test-post', (req, res) => {
  // confirm to save post to database?
  // or save all scrapes to the database
  var data = req.body
  console.log(data.url)
  res.send(data.url)
})

app.listen(port, () => {
  console.log(`Killer.Recipes web scraper listening at http://localhost:${port}`)
})