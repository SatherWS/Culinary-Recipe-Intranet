# Killer.Recipes
The idea for this project is to be GitHub for food recipes. This idea has been attempted and failed in the past (reasons why here). This website will be filled with culinary recipes that were scraped from various sources or submitted by our users. 

Websites that are scraped will be forks users can remix these forks or create original recipes for other users to remix.

## Development
Moving the project to node js because I think it will be easier to deploy and maintain. Plus, I want to see if I can develop a full stack and non-bloated application using node js.

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

Execute deploy.sh (wip)


