function addRedClass() {
  var container = document.getElementById("container");
  container.addEventListener("mouseover", function() {
    container.classList.add("red");
  });
}
document.addEventListener("DOMContentLoaded", function() {
  addRedClass();
});
