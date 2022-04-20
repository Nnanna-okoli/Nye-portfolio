var today = new Date()
var curHr = today.getHours()

//Name
function myFunction() {
    let person = prompt("Hey there, whats your name?", );
    if (person != null) {
      document.getElementById("name").innerHTML =
      `${person},`;
    }
  }

  //Greeting
  function greeting() {
    if (curHr < 12) {
      document.getElementById("greeting").innerHTML = `Good morning`;
    } else if (curHr < 18) {
      document.getElementById("greeting").innerHTML = `Good afternoon`;
    } else {
      document.getElementById("greeting").innerHTML = `Good evening`;
    }

  };
greeting()

//Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}