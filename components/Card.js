const cardTemplate = document.querySelector("#card__template");

// Elemento
class Card {
  constructor(data, selector, handleCardClick, handleOpenConfirmation, api) {
    this.title = data.name;
    this.link = data.link;
    this._id = data._id;
    this.selector = selector || ".card__container";
    this.handleCardClick = handleCardClick;
    this.handleOpenConfirmation = handleOpenConfirmation;
    this._isLiked = data.isLiked;
    this._api = api;
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
    // Pintar de acuerdo a el estado del like de la tarjeta
    if (this._isLiked) {
      this.galleryBtnLike.classList.add("card__button_like_active");
    }

    return this.htmlCard;
  }

  _setEventListener() {
    // Evento Like
    this.galleryBtnLike = this.htmlCard.querySelector(".card__button_like");
    this.galleryBtnLike.addEventListener("click", () => {
      console.log("Estado inicial:", this._isLiked);

      const cardIsLiked = this.galleryBtnLike.classList.contains(
        "card__button_like_active"
      );
      // Primero Hacer la peticion a la API
      this._api(this._id, this._isLiked);
      // Obtengo una respuesta de la API

      // Cambiado la Pantalla
      if (cardIsLiked) {
        // API dislike
        console.log("Esta activado el like:", cardIsLiked);
        this._isLiked = !this._isLiked;
      } else {
        // API like
        console.log("Esta desactivado el like:", cardIsLiked);
        this._isLiked = !this._isLiked;
      }
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
