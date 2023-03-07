var button = document.querySelector("#counter-button");
var counter = 1;
button.addEventListener("click", function() {
  counter *= 2;
  button.textContent = "Contor = " + counter;
});
