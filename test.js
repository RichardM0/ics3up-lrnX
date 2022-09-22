let slideNum = 1;
viewSlides(slideNum);

// Next/previous controls
function numSlides(n) {
  viewSlides(slideNum += n);
}

// Thumbnail image controls
function presentSlide(n) {
  viewSlides(slideNum = n);
}

function viewSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNum = 1} 
  if (n < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block"; 
  dots[slideNum-1].className += " active";
}