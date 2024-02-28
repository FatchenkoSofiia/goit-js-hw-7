const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.trim(); // Видаляємо пробіли з обох кінців введення

  refs.nameOutput.textContent = inputValue
    ? inputValue
    : "Anonymous";
}
