export default class PopUp {
  constructor(popupSelector) {
    this.popElement = document.querySelector(popupSelector);
  }

  open() {
    this.popElement.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible.
  }

  close() {
    this.popElement.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
  }

  _handleClickOutside(evt) {
    // Cerrar al dar click por fuera del Popup
    if (evt.target === this.popElement) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    // Cerrar Popup al presionar "Esc"
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // Evento para cerrar la ventana
    this.popElement
      .querySelector(".popup__button_close")
      .addEventListener("click", () => {
        this.close();
      });

    // Evento Cerrar la ventana dando click por fuera del popup
    this.popElement.addEventListener("click", (evt) => {
      this._handleClickOutside(evt);
    });

    // Evento Cerrar al dar "Esc"
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
}
