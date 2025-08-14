import PopUp from "./PopUp.js";

export default class PopupWithImage extends PopUp {
  constructor(popupSelector) {
    //
    super(popupSelector);

    this._popupSelector = document.querySelector(popupSelector);
    this._title = this._popupSelector.querySelector(".popup__text");
    this._link = this._popupSelector.querySelector(".popup__image");
  }

  open(title, link) {
    this._title.textContent = title;
    this._link.src = link;
    super.open();
  }

  // Crea la clase PopupWithImage como una clase hija de Popup. Esta clase tiene que
  // cambiar el método padre open(). En el método open() de la clase PopupWithImage,
  // debes añadir una imagen al popup y el correspondiente atributo de imagen src junto
  // con una leyenda para la imagen.
}
