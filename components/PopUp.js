export default class PopUp {
  constructor(popupSelector) {
    // El constructor tiene un solo parámetro, que es el selector popup.
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    // Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.
    this._popupSelector.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible.
    // this.close();
  }

  close() {
    // Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.
    this._popupSelector.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
  }

  setEventListeners() {
    // Agrega un detector de eventos de click al icono para cerrar el popup. La ventana
    // modal también debe cerrarse cuando los usuarios hacen clic en el área sombreada
    // del formulario.

    this._popupSelector
      .querySelector(".popup__button_close")
      .addEventListener("click", () => {
        this.close();
      });

    console.log(this._popupSelector.querySelector(".popup__button_close"));
    console.log(this._popupSelector);

    // this._popupSelector.addEventListener("click", () => {
    //   this.close();
    // });

    // Evento para cerrar el Popup dando click por fuera
    // Presionando "Esc"
  }
}
