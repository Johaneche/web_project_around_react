/////////////////////////////////////////////////////////////

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

// Validamos el formulario
function enableValidation(settings) {
  const formList = document.querySelectorAll("form"); //Seleccionamos todos los formularios
  // Hacemos una lista de formularios
  formList.forEach(function (form) {
    // console.log("Formulario con el id: ", form.id);
    const inputList = Array.from(form.querySelectorAll("input")); //cambio el tipo de dato de nodo a array
    setEventListeners(form, inputList);
  });
}

// Validamos los Event Listeners
function setEventListeners(form, inputList) {
  // Validar el boton
  const buttonElement = form.querySelector(".popup__button");
  validateButton(buttonElement, inputList);

  console.log("El boton es: ", buttonElement);
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      showInputError(input);
      validateButton(buttonElement, inputList);
    });
  });
}

// Habilitamos o desabilitamos el boton de guardan
function validateButton(buttonElement, inputList) {
  if (checkInputValidity(inputList)) {
    buttonElement.disabled = true;
    // buttonElement.classList.add("popup__button_disabled");
    // buttonElement.classList.remove("popup__button_disabled");
  } else {
    buttonElement.removeAttribute("disabled");
    // buttonElement.classList.remove("popup__button_disabled");
    // buttonElement.classList.add("popup__button_disabled");
  }
}

// Validamos los inputs
function checkInputValidity(inputList) {
  return inputList.some(function (input) {
    return !input.validity.valid;
  });
}

// Mostramos el mensaje de Error
function showInputError(input) {
  const spanElement = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    spanElement.textContent = input.validationMessage;
  } else {
    spanElement.textContent = "";
  }
}
