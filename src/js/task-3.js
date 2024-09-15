const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

function replace() {
  if (input.value) {
    output.textContent = input.value;
  } else {
    output.textContent = "Anonymous";
  }
}

input.addEventListener("input", replace);
