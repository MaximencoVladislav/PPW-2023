const correctUsername = "user";
const correctPassword = "123";

const username = prompt("Введите имя пользователя:");
const password = prompt("Введите пароль:");

if (!username && !password) {
  console.log("Ошибка Валидации");
} else if (username === correctUsername && password === correctPassword) {
  console.log("Привет");
} else if (username === correctUsername) {
  console.log("Неправильный пароль");
} else {
  console.log("Неправильный username");
}
