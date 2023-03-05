let name = prompt('Введите свое имя');
if (name) {
  alert(`Привет ${name}`);
  let isFamiliar = confirm('Вы знакомы с языком JavaScript?');
  if (isFamiliar) {
    alert('Молодец!');
  } else {
    alert('Можно начать изучение прямо сейчас');
  }
} else {
  alert('Ошибка: не введено имя!');
}
