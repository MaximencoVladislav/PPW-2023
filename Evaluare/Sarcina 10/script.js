const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
});

addButton.addEventListener("click", () => {
  const value = input.value.trim();

  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    input.value = "";
    addButton.disabled = true;
  }
});
