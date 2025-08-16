import { keyPush } from "../utils/utils.js";

const cardTemplate = document.querySelector("#card__template");
const popUp = document.querySelector(".popup");
const popFormEdit = document.querySelector(".popup__form-edit");
const popFormAdd = document.querySelector(".popup__form-add");

const popImage = document.querySelector(".popup__image");
const popText = document.querySelector(".popup__text");

// Elemento
class Card {
  constructor(title, link, selector, handleCardClick) {
    this.title = title;
    this.link = link;
    this.selector = selector || ".card__container";
    this.handleCardClick = handleCardClick;
  }

  _generateTemplate() {
    this.htmlCard = cardTemplate
      .cloneNode(true)
      .content.querySelector(this.selector);
    this.elementImage = this.htmlCard.querySelector(".card__img");
    this.elementImage.src = this.link;
    this.elementText = this.htmlCard
      .querySelector(".card__content")
      .querySelector(".card__title");
    this.elementText.textContent = this.title;
    this._setEventListener();
    return this.htmlCard;
  }

  _setEventListener() {
    // Evento Like
    this.galleryBtnLike = this.htmlCard.querySelector(".card__button_like");
    this.galleryBtnLike.addEventListener("click", () => {
      this._likeCard();
    });
    // Evento Delete
    this.galleryBtnDelete = this.htmlCard.querySelector(".card__button_delete");
    this.galleryBtnDelete.addEventListener("click", (evt) => {
      this._deleteCard();
    });

    // Evento Abrir Ventana Imagen
    this.elementImage.addEventListener("click", () => {
      this.handleCardClick(this.title, this.link);
      // document.addEventListener("keydown", keyPush); // Evento listener Escape
      // this._popUpCard();
    });
  }

  _likeCard() {
    this.galleryBtnLike.classList.toggle("card__button_like_active");
  }

  _deleteCard() {
    this.htmlCard.remove();
  }

  // Metodo para Abrir Tarjeta
  // _popUpCard() {
  //   popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  //   popFormAdd.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  //   popFormEdit.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible

  //   popImage.setAttribute("src", this.link);
  //   popText.textContent = this.title;
  // }

  createCard() {
    this._element = this._generateTemplate();
    return this._element;
  }
}

export { Card };
