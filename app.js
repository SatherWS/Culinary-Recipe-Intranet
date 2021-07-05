const express = require('express')
const recipeScraper = require('recipe-scraper')
const conn = require('./api/dbConnection')

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Display open detail.html and fetch /getRecipe?url=some-url.com on the client
app.get('/details', (req, res) => {
  res.sendFile(__dirname + '/public/details.html')
})

// Save recipe to the database
function saveRecipe(arr) {
  var connection = conn()
  var sql = "INSERT INTO recipes(title, instructions, ingredients, link) VALUES(?, ?, ?, ?)"
  connection.query(sql, arr, (err) => {
    if (err) throw err
    console.log('RECIPE ADDED')
  })
}

// Check if url has been saved
function checkUrl(url, arr) {
  var connection = conn()
  var sql = "SELECT COUNT(*) AS count FROM recipes WHERE link = ?"
  connection.query(sql, url, (err, results) => {
    if (err) throw err
    if (results[0].count == 0) {
      console.log("RECIPE HAS NOT BEEN SCRAPED")
      saveRecipe(arr)
    }
  })
}

// Create and send recipeScraper promise & save to database
app.get('/scrapeRecipe/:url/', (req, res) => {
  var url = req.params.url
  var arr = []
  recipeScraper(url).then(recipe => {
    arr.push(String(recipe.name))
    arr.push(String(recipe.instructions))
    arr.push(String(recipe.ingredients))
    arr.push(String(url))
    checkUrl(String(url), arr)

    res.send(recipe)
    }).catch(error => {
      console.log(error.message)
  })
})

// api methods [getRecipe, searchRecipe, createRecipe]

// get a single recipe by id

// get all recipes

// search recipes and return matches (IMPLEMENT AFTER DEPLOYING)

// create recipe (IMPLEMENT AFTER DEPLOYING)

app.listen(port, () => {
  console.log(`Killer.Recipes web scraper listening at http://localhost:${port}`)
})