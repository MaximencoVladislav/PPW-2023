function generateList() {
  var ol = document.createElement("ol");

  for (var i = 1; i <= 10; i++) {
    var li = document.createElement("li");
    li.textContent = "Option #" + i;

    ol.appendChild(li);
  }

  document.body.appendChild(ol);
}
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    generateList();
  }, 3000);
});
