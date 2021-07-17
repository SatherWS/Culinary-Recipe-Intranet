# Scraped.Recipes
This web application contains culinary recipes that were scraped from various sources. Anyone can use our recipe scraper and add scraped content to our database. If users wish to edit their own copies scraped recipes they will need to create a user account or [download the recipe locally.](google.com)


### Packages Used
* [Embeded Javascript Templates (ejs)](https://www.npmjs.com/package/ejs)
* [Recipe-Scraper](https://www.npmjs.com/package/recipe-scraper) [Kind of ass]
* [Express](https://www.npmjs.com/package/express)
* [Mongo DB](https://www.npmjs.com/package/mongodb)

## Deployment (WIP)
[Article used to host application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

Execute `deploy.sh` (wip)

## Mongo Database Setup
Set `result.url` document fields as unique indices. This prevents duplicate recipes from being saved.

```
db.recipes.createIndex({"result.url": 1}, {unique: true})
```

### TODO:
* <strike>Switch to Mongo DB (done)</strike>
* Secure Mongo database
* Look into monetization through affiliate links (important)
    * local restaurants 
    * grocery delivery
    * grubhub, uber eats, etc.
* Search recipes (semi-important)
* Improve recipe scraping (important)
* Implement web crawling recipe scraping bots (important)
* User authentication (semi-important)
* Save and edit user's recipes (semi-important)
* Use React instead of ejs (may not be necessary, low importance)
* <strike>Change name to scraped.recipes (important)</strike>
* <strike>Use partials in repeated ui components</strike>
* <strike>Change scraper.html to scraper.ejs</strike>

## Recipes that take too long
* https://www.closetcooking.com/carne-asada-with-avocado-salsa-verde/
* https://www.thedailymeal.com/cook/how-hard-boil-eggs-and-peel-them-perfectly-every-time

## Notes to Self (Old)
[Opening and closing MySQL connections are not necessary](https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit)

```
-- This query must be ran, to satisfy mysql npm package security requirements.
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
```
