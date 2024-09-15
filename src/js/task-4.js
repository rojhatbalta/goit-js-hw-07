const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = {};

  for (const element of form.elements) {
    if (element.tagName === "INPUT") {
      if (element.value) {
        formData[element.name] = element.value;
      } else {
        alert("All form fields must be filled in");
        formData = {};
      }
    }
  }

  console.log(formData);
  form.reset();
});
