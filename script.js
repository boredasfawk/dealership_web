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

const media = window.matchMedia("(max-width: 690px)");
const navUl = document.getElementById("navHide");
const btn = document.getElementById("btn");
const li = document.querySelector("li");

if (media.mathes) {
  navUl.style.display = "none";
}

var getParentAnchor = function(element) {
  while (element !== null) {
    if (element.tagName.toUpperCase() === "A") {
      return element;
    }
    element = element.parentNode;
  }
  return null;
};
document.querySelector("body").addEventListener(
  "click",
  function(e) {
    var anchor = getParentAnchor(e.target);
    if (anchor !== null) {
      if (navUl.style.display === "none") {
        navUl.style.display = "block";
      } else {
        navUl.style.display = "none";
      }
    }
  },
  false
);

window.onload = () => {
  btn.addEventListener("click", () => {
    if (navUl.style.display === "none") {
      navUl.style.display = "block";
    } else {
      navUl.style.display = "none";
    }
  });
};
