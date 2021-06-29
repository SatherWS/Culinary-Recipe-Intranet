// Nav Functionality
function closeMenu() {
  var menuItems = document.getElementById('drop');
  var menuIcon = document.getElementsByClassName('dropbtn')[0];
  if(menuItems.style.display == "none"){
    menuItems.style.display = "block";
    menuIcon.style.borderBottom = "none";
    menuIcon.style.borderBottomRightRadius = "0px";
  }
  else {
    menuItems.style.display = "none";
    menuIcon.style.borderBottom = "solid 2px #ff5400";
    menuIcon.style.borderBottomRightRadius = "5px";
  }
}

// Slide show script
var slideIndex = 1;

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
    // debugs
    console.log(x[i]);
    console.log("---------");
    console.log(x[slideIndex]);
  }
  x[slideIndex].style.display = "block";

}
