# Killer.Recipes
The idea for this project is to be GitHub for recipes. This idea has been attempted and failed in the past, [see reasons why here]("https://google.com"). This website will be filled with culinary recipes that were scraped from various sources or submitted by our users. Websites that are scraped are considered [forks]("https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks") users can remix these forks or create original recipes for other users to fork.

## Development
Moving the project to node js because I think it will be easier to deploy and maintain. Plus, I want to see if I can develop a full stack and non-bloated application using node js.
    
* [Recipe Scraper Package in NPM](https://www.npmjs.com/package/recipe-scraper) 

### Development Using WSL2
Currently hosting a database server on my WSL2 program. I've followed [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-allow-remote-access-to-mysql) to enable remote connections to my database server, but it is still not working. I've enabled ssh to my WSL2 instance as well, however I may want to remove that feature.


I should just move this project to my WSL2 instance because it will simulate how my app will be hosted on a live server. 
TODO: separate the database logic from the `app.js` file.

### Packages Used
* Recipe-Scraper
* Express
* MySql
* Node-Fetch (not really)

## Deployment (WIP)
[Article used to host application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

Execute `deploy.sh` (wip)

## Notes to Self
[Opening and closing connections is not necessary](https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit)

```
-- This command must be ran, to satisfy mysql auth requirements.
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



