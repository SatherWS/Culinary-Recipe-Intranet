const results = document.getElementById("recipe-results")

// window.onload = function()
window.onload = () => {
    try {
        fetch("/allRecipes").then(res => {
           console.log(res.text())
        })
        .catch(error => console.error(error))

    } catch (err) {
      console.log("Issues with Parsing URL Parameter's - " + err);
    }
}