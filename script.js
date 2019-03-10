// Testimonial Slide show    
/*var slideIndex = 1;
    showSlides(slideIndex);
    
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}    
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
// If Else Statements
if (n > slides.length){
    slideIndex=1;
}
if (n < 1) {
    slideIndex = slides.lenght;
}
    for (i=0; i < dots.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
}*/
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} 
  for (i = 0; i < x.length; i++) {  
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}
