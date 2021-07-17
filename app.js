const express = require('express')
const recipeScraper = require('recipe-scraper')
const path = require('path')
var MongoClient = require('mongodb').MongoClient
const { ObjectId } = require('mongodb')

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// For the time being all database operations will go inside the MongoClient connection

MongoClient.connect('mongodb://localhost:27017/sr', (err, client) => {
  if (err) throw err
	const db = client.db('sr')
	const recipeCollection = db.collection('recipes')

  // Scrape recipe and add to db url not present
  app.post('/scrapeRecipe', async(req, res) => {
    var url = req.body.url.link
    var obj = {} 
    recipeScraper(url).then((recipe) => {
      obj = {result: {recipe, url: url}}
      recipeCollection.insertOne(obj).then(() => {
        console.log(obj)
        res.render('details.ejs', obj)
      }).catch(error => {
        // This extra catch makes the logs easier to read,
        // a temporary fix at this point.
        console.log(error.message)
        res.render('details.ejs', obj)
      })
    }).catch(error => {
        console.log(error.message)
        // TODO: render error message in web scraper page
    })
  })

  // Show all the recipes in the db
  app.get('/getRecipes', (req, res) => {
    recipeCollection.find().toArray((err, result) => {
      if (err) throw err
      console.log({recipes: result})
      res.render('recipes.ejs', {recipes: result})
    })
  })

  // Get a single recipe from the db by get request id 
  app.get('/singleRecipe/:id', (req, res) => {
    var id = req.params.id
    var oid = new ObjectId(id)
    recipeCollection.findOne({_id: oid}, (err, result) => {
      if (err) throw err
      console.log(result)
      res.render('details.ejs', result)
    })
  })

  // Search recipes and return matches in results view
  app.post('/searchRecipe', (req, res) => {
    var s = req.params.search
    recipeCollection.find({}).toArray((err, result) => {
      if (err) throw err
      res.render('recipes.ejs', {recipes: result})
    })
  })
})

app.get('/recipeScraper', (req, res) => {
  res.render('scraper.ejs')
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Scraped.Recipes web scraper listening at http://localhost:${port}`)
})
