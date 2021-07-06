# Killer.Recipes
The idea for this project is to be GitHub for recipes. This idea has been attempted and failed in the past, [see reasons why here](https://google.com). This website contains culinary recipes that were scraped from various sources and can be edited by anyone. Websites that are scraped are called "forks". Users can edit these "forks" by creating a new "branch" of the scraped recipe. User accounts are not necessary for Killer Recipes, our goal is to never impede our users with extra hoops to jump through.

* [GitHub definition of forks](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks)
* [GitHub definition of branches](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

## Development
Moving the project to node js because I think it will be easier to deploy and maintain. Plus, I want to see if I can develop a full stack and non-bloated application using node js.


### Development Using WSL2
Currently hosting a database server on my WSL2 program. I've followed [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-allow-remote-access-to-mysql) to enable remote connections to my database server, but it is still not working. I've enabled ssh to my WSL2 instance as well, however I may want to remove that feature.


I should just move this project to my WSL2 instance because it will simulate how my app will be hosted on a live server. 
TODO: separate the database logic from the `app.js` file.

### Packages Used
* [Recipe-Scraper](https://www.npmjs.com/package/recipe-scraper)
* [Express](https://www.npmjs.com/package/express)
* [MySQL](npmjs.com/package/mysql) [TODO: SWITCH TO MONGODB]

## Deployment (WIP)
[Article used to host application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

Execute `deploy.sh` (wip)

## Notes to Self
[Opening and closing connections is not necessary](https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit)

```
-- This query must be ran, to satisfy mysql and express js security requirements.
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
```

### TODO:
* Change scraper.html to scraper.ejs
* Search recipes
* Fix landing page design and search fields on mobile 
* Look into monetization through drink pairing affiliate links (important)
* Set up local WSL2 dev environment with nginx

## Recipes that take too long
* https://www.closetcooking.com/carne-asada-with-avocado-salsa-verde/



