window.onload = init;
var burg;

function toggleNav() {
  burg.classList.toggle("opened");
  navBar.classList.toggle("opened");
}

function init() {
  burg = document.getElementById("burgerBody");
  navBar = document.querySelector(".navMenuBody");
  burg.addEventListener("click", toggleNav);
}
