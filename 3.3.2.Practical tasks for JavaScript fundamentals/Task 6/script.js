let num = prompt("Введите число");

if (isNaN(num)) {
  alert("Error");
} else {
  num = Number(num);

  if (num > 0) {
    alert("1");
  } else if (num < 0) {
    alert("-1");
  } else {
    alert("0");
  }
}
