// Nav Functionality
function closeMenu() {
     var menuItems = document.getElementById('drop');
     if(menuItems.style.display == "none"){
       menuItems.style.display = "block";
     }
     else {
       menuItems.style.display = "none";
     }
}

// Prompts user to input a new entry or
// to search another existing entry.
function getPrompt() {
  var prompt = document.getElementById('recipeResult');
  var dish = document.getElementById('searchItem');
  var blank = document.getElementById('blank');
  blank.innerHTML = "Sorry there isn't a recipe for "+dish.value;
  if(prompt.style.display == "none") {
    prompt.style.display = "block";
  }
  else {
    prompt.style.display = "block";
  }
}

// return to search section
/* d/n work yet, needs to simply return home */
function closePrompt() {
  var panel = getElementById('recipeResult');
  panel.style.display = "none";

}
// if new entry is created...
function getForm() {
  var form = document.getElementById('recipeForm');
  if(form.style.display == "none") {
    form.style.display = "block";
  }
  else {
    form.style.display = "block";
  }
}
