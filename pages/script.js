// Agregando las Clases a utilizar
let popUp = document.querySelector(".popup");
let nameDefault = document.querySelector(".main__paragraph_name");
let occupationDefault = document.querySelector(".main__paragraph_occupation");

// Agregando los Botones a utilizar
let btnEdit = document.querySelector(".main__button_edit");
let btnCloseWindow = popUp.querySelector(".popup__button_close");
let btnSave = popUp.querySelector(".popup__button_save");

// Agregando los Inputs
let inName = document.querySelector(".popup__input_name");
let inOccupation = document.querySelector(".popup__input_occupation");

// Abrir la ventana de Editar
function editWindow() {
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible

  inName.value = nameDefault.textContent; // Me aparezca el nombre del perfil a modificar
  inOccupation.value = occupationDefault.textContent; // Me aparezca la ocupacion del perfil a modificar
}

// Cerrar la ventana de Editar
function closeWindow() {
  popUp.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
}

function saveInfo() {
  nameDefault.textContent = inName.value; //Cambio el nombre actual por el valor que hay el input
  occupationDefault.textContent = inOccupation.value; //Cambio la ocupacion actual por el valor que hay el input
  closeWindow();
}

btnEdit.addEventListener("click", editWindow);
btnCloseWindow.addEventListener("click", closeWindow);
btnSave.addEventListener("click", saveInfo);
