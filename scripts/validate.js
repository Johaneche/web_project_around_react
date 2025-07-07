const errorName = document.querySelector(".popup__input_name-error");
const errorOccupation = document.querySelector(
  ".popup__input_occupation-error"
);

function validateInput(input) {
  const span = document.querySelector(`#${input.id}-error`);
  if (!inName.validity.valid) {
    span.textContent = input.validationMessage;
  } else {
    errorName.textContent = "";
  }
}

function toggleButton() {
  if (inName.validity.valid && inOccupation.validity.valid) {
    btnEditSave.disable = false;
  } else {
    btnEditSave.disable = true;
  }
}

inName.addEventListener("input", function () {
  validateInput(inName);
});

inOccupation.addEventListener("input", function () {
  validateInput(inOccupation);
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
