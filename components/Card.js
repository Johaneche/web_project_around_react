const cardTemplate = document.querySelector("#card__template");

// Elemento
class Card {
  constructor(data, selector, handleCardClick, handleOpenConfirmation) {
    this.title = data.name;
    this.link = data.link;
    this._id = data._id;
    this.selector = selector || ".card__container";
    this.handleCardClick = handleCardClick;
    this.handleOpenConfirmation = handleOpenConfirmation;
  }

  _generateTemplate() {
    this.htmlCard = cardTemplate
      .cloneNode(true)
      .content.querySelector(this.selector);
    // console.log("cardId", this._id);
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
    });
  }

  _likeCard() {
    this.galleryBtnLike.classList.toggle("card__button_like_active");
  }

  _deleteCard() {
    // this.htmlCard.remove();
    // console.log(this);
    this.handleOpenConfirmation(this._id);
  }

  removeCardHtml() {
    this.htmlCard.remove();
  }

  createCard() {
    this._element = this._generateTemplate();
    return this._element;
  }
}

export { Card };
