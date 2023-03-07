let a = +prompt("Introduceti numarul a");
let b = +prompt("Introduceti numarul b");
let c = +prompt("Introduceti numarul c");

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

console.log(`Cel mai mare numar: ${max}, cel mai mic numar: ${min}`);
