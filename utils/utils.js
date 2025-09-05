// Agregando las Clases a utilizar
export const popUp = document.querySelector(".popup");
export const nameDefault = document.querySelector(".main__paragraph_name");
// export const galleryContainer = document.querySelector(".gallery");
export const aboutDefault = document.querySelector(".main__paragraph_about");

// Agregando los Botones a utilizar
export const btnEdit = document.querySelector(".main__button_edit");
export const btnAdd = document.querySelector(".main__button_add");
export const changeAvatar = document.querySelector(".main__img-profile");

// Agregando los Inputs
export const inName = document.querySelector(".popup__input_name");
export const inabout = document.querySelector(".popup__input_about");

// Funcion validacion Tecla Presionada
export function keyPush(evt) {
  if (evt.key === "Escape") {
    closeWindow();
  }
}
