const button = document.querySelector(".change-color");
const span = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function setRandomHexColor() {
  const randomHexColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = `${randomHexColor}`;

  span.textContent = `${randomHexColor}`;
}

button.addEventListener("click", setRandomHexColor);
