import PopUp from "./PopUp.js";

export default class PopupWithConfirmation extends PopUp {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._link = this._popupSelector.querySelector(".popup__input_link");
  }

  open(cardId, action) {
    this.handleSubmit = action;
    this.cardId = cardId;
    super.open(); // Seguir ejecutando metodo open del padre
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement = this._popupSelector.querySelector("form");
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleSubmit(this.cardId); //Estoy pasando a handleSubmit un objeto que obtengo de getInputValue
      super.close();
    });
  }
}
