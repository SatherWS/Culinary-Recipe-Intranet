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
// n = -1 go to last slide
  if (n < 0) {
    slideIndex = x.length -1;
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
