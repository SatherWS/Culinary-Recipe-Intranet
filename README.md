# Scraped.Recipes
This web application contains culinary recipes that were scraped from various sources. Anyone can use our recipe scraper and add scraped content to our database. If users wish to edit their own copies scraped recipes they will need to create a user account or [download the recipe locally.](google.com)


### Packages Used
* [Embedded Javascript Templates (ejs)](https://www.npmjs.com/package/ejs)
* [Recipe-Scraper](https://www.npmjs.com/package/recipe-scraper) [Kind of ass]
* [Express](https://www.npmjs.com/package/express)
* [Mongo DB](https://www.npmjs.com/package/mongodb)

## Deployment Notes
[Article used to host application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

Execute `deploy.sh` (wip)

**Deployments**
| Date | Time | Commit Link |
| ---- | ---- | ----------- |
| July 18 2021| xx:xx:xx | [commit 56af09e](https://github.com/colinsather/Scraped.Recipes/commit/56af09e) |
| July 6 2021 | 22:13:48 | [commit 672d7fb](https://github.com/colinsather/Scraped.Recipes/commit/672d7fbd6751123476bfc6297b75450dd1d801c5) |


### TODO:
* <strike>Switch to Mongo DB (done)</strike>
* Secure Mongo database (important)
    * Do after user authentication is implemented
* Implement monetization through affiliate links (important)
* <strike>Search recipes (semi-important)</strike>
* Improve recipe scraping (important)
* Implement web crawling recipe scraping bots (important)
* User authentication (semi-important)
* Save and edit user's recipes (semi-important)
* Use React instead of ejs (low importance)
* <strike>Change name to scraped.recipes (important)</strike>
* <strike>Use partials in repeated ui components</strike>
* <strike>Change scraper.html to scraper.ejs</strike>

## Mongo Database Notes
Set `url` document fields as unique indices. This prevents duplicate recipes from being saved.

```
db.recipes.createIndex({"url": 1}, {unique: true})
```
Get indexes
```
db.recipes.getIndexes()
```

Searching the database using text indexes and scores. 
* [text search indexes](https://docs.mongodb.com/manual/text-search/#:~:text=MongoDB%20supports%20query%20operations%20that,index%20and%20the%20%24text%20operator.&text=Views%20do%20not%20support%20text%20search.)
* [text scores](https://docs.mongodb.com/manual/tutorial/control-results-of-text-search/)
```
// create text index
//db.recipes.find({"recipe.name": /m/})
db.recipes.createIndex( { name: "text", description: "text" } )

// assign scores

// get text by score (wip)
//recipeCollection.find({"$text": {"$search": s}}).toArray((err, result) => {
db.recipes.find( { $text: { $search: "java coffee shop" } } )
```

Mongo db version of the describe command
```
var col_list= db.recipes.findOne();
for (var col in col_list) { print (col) ; }
```

## Scraping Expedition Notes
[www.gimmesomeoven.com](www.gimmesomeoven.com)


In order to grow my collection of recipes I am going to select specific sites to crawl and scrape. The first target is [give me some oven](https://gimesomeoven.com). The goal is to crawl and scrape all recipes in the Entrees/Main Dishes category.


### Recipes and sites that take too long
* https://www.closetcooking.com/carne-asada-with-avocado-salsa-verde/
* https://www.thedailymeal.com/cook/how-hard-boil-eggs-and-peel-them-perfectly-every-time

