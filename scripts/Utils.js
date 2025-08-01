// Agregando las Clases a utilizar
const popUp = document.querySelector(".popup");
const nameDefault = document.querySelector(".main__paragraph_name");
const occupationDefault = document.querySelector(".main__paragraph_occupation");
const popFormEdit = document.querySelector(".popup__form-edit");
const popFormAdd = document.querySelector(".popup__form-add");
const popImages = document.querySelector(".popup__images");
const popHidden = document.querySelector(".popup__hidden");
const galleryContainer = document.querySelector(".gallery");

// Agregando los Botones a utilizar
const btnEdit = document.querySelector(".main__button_edit");
const btnCloseWindow = popUp.querySelector(".popup__button_close");
const btnEditSave = popUp.querySelector(".popup__button_save");
const btnAdd = document.querySelector(".main__button_add");
const btnAddSave = document.querySelector(".popup__button_add");
const btnLike = document.querySelectorAll(".gallery__button_like");
const btnDelete = document.querySelector(".gallery__button_delete");
const btnCard = document.querySelector(".gallery__img");

// Agregando los Inputs
const inName = document.querySelector(".popup__input_name");
const inOccupation = document.querySelector(".popup__input_occupation");
const inTitle = document.querySelector(".popup__input_title");
const inURL = document.querySelector(".popup__input_url");

// Funcion Abrir ventana: Agregar Tarjeta
export function addWindow() {
  popFormAdd.reset(); //Reseteo el formulario
  document.addEventListener("keydown", keyPush); // Evento listener Escape
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  popFormEdit.classList.add("popup__hidden"); // Agrego la clase al popup__form-edit para que sea no visible
  popImages.classList.add("popup__hidden"); // Agrego la clase al popup__images para que sea no visible
}

// Funcion Cerrar ventana: Popup
export function closeWindow() {
  popUp.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
  popFormAdd.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  popFormEdit.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  popImages.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  document.removeEventListener("keydown", keyPush); //Elimino la clase keyPush
}

// Funcion Abrir ventana: Editar
export function editWindow() {
  document.addEventListener("keydown", keyPush); // Evento listener Escape
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  popFormAdd.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  popImages.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  inName.value = nameDefault.textContent.trim(); // Me aparezca el nombre del perfil a modificar
  inOccupation.value = occupationDefault.textContent.trim(); // Me aparezca la ocupacion del perfil a modificar
}

// Funcion Guardar Informacion: Editar
export function saveInfo(evt) {
  evt.preventDefault();
  nameDefault.textContent = inName.value; //Cambio el nombre actual por el valor que hay el input
  occupationDefault.textContent = inOccupation.value; //Cambio la ocupacion actual por el valor que hay el input
  closeWindow();
}

// Funcion validacion Tecla Presionada
export function keyPush(evt) {
  if (evt.key === "Escape") {
    closeWindow();
  }
}
