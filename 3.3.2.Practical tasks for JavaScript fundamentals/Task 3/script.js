let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");

let max, min;

if (a > b) {
  if (a > c) {
    max = a;
  } else {
    max = c;
  }
} else {
  if (b > c) {
    max = b;
  } else {
    max = c;
  }
}

if (a < b) {
  if (a < c) {
    min = a;
  } else {
    min = c;
  }
} else {
  if (b < c) {
    min = b;
  } else {
    min = c;
  }
}

console.log(`Наибольшее число: ${max}, наименьшее число: ${min}`);
