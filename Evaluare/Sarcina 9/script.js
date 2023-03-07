var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var list = document.querySelector("#list");
function displayNumbers() {
  var index = 0;
  var interval = setInterval(function() {
    if (index >= numbers.length) {
      clearInterval(interval);
      return;
    }
    var li = document.createElement("li");
    li.textContent = numbers[index];
    list.appendChild(li);
    index++;
  }, 1000);
}
displayNumbers();
