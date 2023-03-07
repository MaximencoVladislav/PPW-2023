let a = parseInt(prompt("Introdu primul număr:"));
let b = parseInt(prompt("Introdu al doilea număr:"));

let sum = 0;
for (let i = a; i <= b; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

alert(`Suma numerelor impare din intervalul [${a}, ${b}] este ${sum}.`);
