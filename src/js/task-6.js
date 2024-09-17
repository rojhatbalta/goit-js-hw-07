const createButton = document.querySelector(`#create-button`);
const destroyButton = document.querySelector(`#destroy-button`);
const input = document.querySelector(`input`);
const boxesContainer = document.querySelector(`#boxes`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add(`boxCSS`);
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener(`click`, () => {
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener(`click`, destroyBoxes);
