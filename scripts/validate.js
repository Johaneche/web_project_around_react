const errorName = document.querySelector(".popup__input_name-error");
const errorOccupation = document.querySelector(
  ".popup__input_occupation-error"
);

function validateInput(input) {
  const span = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    span.textContent = input.validationMessage;
  } else {
    span.textContent = "";
  }
}

function toggleButton() {
  if (inName.validity.valid && inOccupation.validity.valid) {
    btnEditSave.disable = false;
    console.log("Habilito el boton");
    console.log(btnEditSave.disable);
  } else {
    btnEditSave.disable = true;
    console.log("Desabilito el boton");
    console.log(btnEditSave.disable);
  }
}

toggleButton();

inName.addEventListener("input", function () {
  validateInput(inName);
  toggleButton();
});

inOccupation.addEventListener("input", function () {
  validateInput(inOccupation);
  toggleButton();
  // console.log(btnEditSave.disable);
});

/////////////////////////////////////////////////////
// habilitar
const enableValidation = function (config) {
  const forms = document.querySelectorAll(config.formSelector);
  console.log(forms);
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

// reset
