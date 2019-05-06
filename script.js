(function IIFE() {
  let slideIndex = 0;
  let i;
  const slides = document.getElementsByClassName("slide_fade");

  function showSlides() {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    return setTimeout(showSlides, 4000);
  }
  return showSlides;
})()();

$(document).ready(function() {
  $(".btn").click(function() {
    $("nav ul").slideToggle(3000);
  });
});
