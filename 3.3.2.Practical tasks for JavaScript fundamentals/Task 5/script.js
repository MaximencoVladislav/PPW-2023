function extractCurrencyValue(str) {
  return Number(str.replace(/[^0-9.-]+/g,""));
}

console.log(extractCurrencyValue('$120')); // 120
console.log(extractCurrencyValue('$3.99')); // 3.99
console.log(extractCurrencyValue('€49.99')); // 49.99