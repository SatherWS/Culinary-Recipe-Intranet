const recipeScraper = require("recipe-scraper");

// enter a supported recipe url as a parameter - returns a promise
async function someAsyncFunc() {
  let recipe = await recipeScraper("https://www.101cookbooks.com/maximalist-potato-salad/");
}

// using Promise chaining
recipeScraper("https://www.101cookbooks.com/maximalist-potato-salad/").then(recipe => {
    // do something with recipe
    console.log(recipe.name);
    console.log(recipe.instructions);

  }).catch(error => {
    // do something with error
    console.log(error.message);
});
