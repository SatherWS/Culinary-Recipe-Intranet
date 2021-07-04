const title = document.getElementById("title")
const ingredients = document.getElementById("ingredients")
const instructions = document.getElementById("instructions")

// window.onload = function()
window.onload = () => {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var link = url.searchParams.get("url");
        var encode = encodeURIComponent(link)
        fetch("/getRecipe/"+encode).then(res => res.json())
        .then(data => {
            title.innerHTML = data.name
            ingredients.innerHTML += data.ingredients
            instructions.innerHTML += data.instructions
        })
        .catch(error => console.error(error))

    } catch (err) {
      console.log("Issues with Parsing URL Parameter's - " + err);
    }
}