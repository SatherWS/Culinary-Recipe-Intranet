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

// Slide show script
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 0;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    console.log(x[i]);
    console.log("---------");
    console.log(x[slideIndex]);
  }
  x[slideIndex].style.display = "block";

}
