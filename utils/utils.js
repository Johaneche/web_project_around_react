// Agregando las Clases a utilizar
export const popUp = document.querySelector(".popup");
export const nameDefault = document.querySelector(".main__paragraph_name");
export const galleryContainer = document.querySelector(".gallery");
export const occupationDefault = document.querySelector(
  ".main__paragraph_occupation"
);

// Agregando los Botones a utilizar
export const btnEdit = document.querySelector(".main__button_edit");
export const btnAdd = document.querySelector(".main__button_add");

// Agregando los Inputs
export const inName = document.querySelector(".popup__input_name");
export const inOccupation = document.querySelector(".popup__input_occupation");

// Funcion validacion Tecla Presionada
export function keyPush(evt) {
  if (evt.key === "Escape") {
    closeWindow();
  }
}
