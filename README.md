# Scraped.Recipes
This web application contains culinary recipes that were scraped from various sources. Anyone can use our recipe scraper and add scraped content to our database. If users wish to edit their own copies scraped recipes they will need to create a user account or [download the recipe locally.](google.com)

## Development
Moved the project from python and mysql to nodejs and mongo db. The reason is that I think it will be easier to deploy and maintain. Plus, I want to see if I can develop a full stack and non-bloated application using nodejs, so far I believe I am succeeding.


### Packages Used
* [Embeded Javascript Templates (ejs)](https://www.npmjs.com/package/ejs)
* [Recipe-Scraper](https://www.npmjs.com/package/recipe-scraper) [Kind of ass]
* [Express](https://www.npmjs.com/package/express)
* [MySQL](npmjs.com/package/mysql) [TODO: switch to mongodb]

## Deployment (WIP)
[Article used to host application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

Execute `deploy.sh` (wip)

## Mongo Database Setup


## Notes to Self
[Opening and closing MySQL connections are not necessary](https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit)

```
-- This query must be ran, to satisfy mysql npm package security requirements.
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
```

### TODO:
* Switch to Mongo DB (important)
* Look into monetization through affiliate links (important)
    * local restaurants 
    * grocery delivery
    * grubhub, uber eats, etc.
* Search recipes (important)
* Improve recipe scraping (seems difficult)
* Implement web crawling recipe scraping bots (important, we need a huge db)
* User authentication (semi-important)
* Save and edit user's recipes (semi-important)
* Fix landing page design and search fields on mobile (in progress)
* Use React instead of ejs (may not be necesssary, low importance)
* <strike>Change name to scraped.recipes (important)</strike>
* <strike>Use partials in repeated ui components</strike>
* <strike>Change scraper.html to scraper.ejs</strike>

## Recipes that take too long
* https://www.closetcooking.com/carne-asada-with-avocado-salsa-verde/
* https://www.thedailymeal.com/cook/how-hard-boil-eggs-and-peel-them-perfectly-every-time

