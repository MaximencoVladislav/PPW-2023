function setParagraphBackground() {
  var paragraphs = document.getElementsByTagName("p");

  for (var i = 0; i < paragraphs.length; i++) {
    if ((i + 1) % 2 === 0) {
      paragraphs[i].style.backgroundColor = "green";
    } else {
      paragraphs[i].style.backgroundColor = "blue";
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  setParagraphBackground();
});
