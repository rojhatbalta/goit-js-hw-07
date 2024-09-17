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

  //Burada da backtick çözümünü uyguladım
  const boxesHTML = Array.from({ length: amount })
    .map(() => {
      const boxHTML = `<div class="boxCSS" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
      size += 10;
      return boxHTML;
    })
    .join("");

  boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainer.innerHTML = ``;
}

createButton.addEventListener(`click`, () => {
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = ``;
  }
});

destroyButton.addEventListener(`click`, destroyBoxes);
