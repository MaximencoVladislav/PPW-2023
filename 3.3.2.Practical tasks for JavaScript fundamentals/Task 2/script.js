let a = parseInt(prompt("Введите начальное значение интервала:"));
let b = parseInt(prompt("Введите конечное значение интервала:"));


if (isNaN(a) || isNaN(b)) {
  console.error("Ошибка: введите числовые значения");
} else {
 
  let sum = 0;

  for (let i = a; i <= b; i++) {

    if (i % 2 === 0) {
  
      sum += i;
    }
  }

  console.log("Сумма четных чисел от " + a + " до " + b + " равна " + sum);
}
