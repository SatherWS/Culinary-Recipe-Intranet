const express = require('express')
const recipeScraper = require('recipe-scraper')
const path = require('path')
const conn = require('./api/dbConnection')
const mconn = require('./api/mongoModule.js')

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Save recipe to the db if not present
function saveRecipe(arr) {
  var connection = conn()
  var sql = "INSERT INTO recipes(title, ingredients, instructions, link) VALUES(?, ?, ?, ?)"
  connection.query(sql, arr, (err) => {
    if (err) throw err
    console.log('RECIPE ADDED')
  })
}

// Check if url has been saved, if not save to db
function checkUrl(url, arr) {
  var connection = conn()
  var sql = "SELECT COUNT(*) AS count FROM recipes WHERE link = ?"
  connection.query(sql, url, (err, results) => {
    if (err) throw err
    if (results[0].count == 0) {
      console.log("RECIPE HAS NOT BEEN SCRAPED")
      saveRecipe(arr)
    } 
    else console.log("RECIPE ALREADY SCRAPED")
  })
}

// MONGO DATABASE CODE START
function selectDocument() {
  console.log("select all recipe documents") 
}

// Display landing page
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// Display recipe scraper form
app.get('/recipeScraper', (req, res) => {
  res.render('scraper.ejs')
})

// Create and send recipeScraper promise & save to database
app.post('/scrapeRecipe', (req, res) => {
  var url = req.body.url.link
  var obj = {} 
  var arr = []
  recipeScraper(url).then(recipe => {
    arr.push(String(recipe.name))
    arr.push(String(recipe.ingredients))
    arr.push(String(recipe.instructions))
    arr.push(String(url))
    checkUrl(String(url), arr)
    obj = {ret: recipe}
    res.render("details.ejs", obj)

    }).catch(error => {
      console.log(error.message)
  })
})

/* api methods [getRecipe, searchRecipe, createRecipe] */

// Show all the recipes in the db
app.get('/getRecipes', (req, res) => {
  var connection = conn()
  var obj = {}
  var sql = "SELECT id, title, SUBSTRING(instructions, 1, 300) AS summary FROM recipes ORDER BY date_posted DESC"
  connection.query(sql, (err, results) => {
    if (err) throw err
    obj = {recipes: results}
    res.render('recipes.ejs', obj)
  })
})

// Get a single recipe by id from the db
app.get('/singleRecipe/:id', (req, res) => {
  var id = req.params.id
  var connection = conn()
  var obj = {}
  var sql = "SELECT title, instructions, ingredients, link, date_posted FROM recipes WHERE id = ?"
  connection.query(sql, id, (err, results) => {
    if (err) throw err
    obj = {single: results}
    res.render('details.ejs', obj)
  })
})

// Search recipes and return matches in results view (IMPLEMENT AFTER DEPLOYING)

app.listen(port, () => {
  console.log(`Killer.Recipes web scraper listening at http://localhost:${port}`)
})
