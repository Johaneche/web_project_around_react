import { api } from "./Api.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { btnEdit, btnAdd, changeAvatar } from "../utils/utils.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

// Creando el Token
const token = "e1c847d7-12c5-4195-b7a6-a90857c56bff";

const userProfileConfig = {
  name: ".main__paragraph_name",
  about: ".main__paragraph_about",
  avatar: ".main__img-profile",
};

const userProfile = new UserInfo({
  name: userProfileConfig.name,
  about: userProfileConfig.about,
  avatar: userProfileConfig.avatar,
});

// Agregando API para el Usuario
api.getUser().then((data) => {
  userProfile.setUserInfo(data.name, data.about); //obtengo la info del user
  userProfile.changeAvatar(data.avatar); //obtengo la imagen del avatar

  // Instanciando las clases
  const popupProfile = new PopupWithForm(
    "#popupProfile",
    ".popup__form-edit",
    (data) => {
      // console.log(data);
      api
        .userEdit(data.name, data.about)
        .then(function () {
          userProfile.setUserInfo(data.name, data.about);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
  popupProfile.setEventListeners();

  // Eventos Listener para botones
  btnEdit.addEventListener("click", () => popupProfile.open());
});

// Popup Editar Avatar
const popupChangeAvatar = new PopupWithForm(
  "#popupAvatar",
  ".popup__form-avatar",
  (data) => {
    console.log(data);
    api
      .avatarEdit(data.linkAvatar)
      .then(function () {
        userProfile.changeAvatar(data.linkAvatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
popupChangeAvatar.setEventListeners();
changeAvatar.addEventListener("click", () => popupChangeAvatar.open());

// Agregando API para Tarjetas Iniciales
api.getInitialCards().then(function (initialCards) {
  console.log(initialCards);
  // Agregando la seccion
  const cardSection = new Section(
    {
      item: initialCards,
      renderer: (item) => {
        // intanciar el newCard
        const newCard = new Card(
          item,
          ".card__container",
          (title, link) => {
            // Abrimos la carta
            popupOpenCard.open(title, link);
          },
          (cardId) => {
            console.log(cardId);
            // instanciar el popupWithConfirmation.
            popupDeleteConfirmation.open(cardId, (cardId) => {
              api.deleteCard(cardId).then(() => {
                // renderizar la tarjeta eliminada
                newCard.removeCardHtml();
                popupDeleteConfirmation.close();
              });
            });
          },
          (cardId, isLiked) => {
            console.log(cardId);
            api.changeStatusLikeCard(cardId, isLiked).then(() => {
              newCard._likeCard();
            });
          }
        );
        cardSection.addItem(newCard.createCard());
      },
    },
    ".gallery"
  );
  cardSection.renderer();

  const popupAddCard = new PopupWithForm(
    "#popupAddCard",
    ".popup__form-add",
    (data) => {
      api.createCard(data.title, data.url).then(function (card) {
        const newCard = new Card(
          card,
          ".card__container",
          (title, link) => {
            // Abrimos la carta
            popupOpenCard.open(title, link);
          },
          (cardId) => {
            console.log(cardId);
            // instanciar el popupWithConfirmation.
            popupDeleteConfirmation.open(cardId, (cardId) => {
              api.deleteCard(cardId).then(() => {
                // renderizar la tarjeta eliminada
                newCard.removeCardHtml();
                popupDeleteConfirmation.close();
              });
            });
          }
        );

        const cardElement = newCard.createCard();
        cardSection.addItem(cardElement); // agrego la carta
      });
      console.log(data);
    }
  );

  popupAddCard.setEventListeners();

  const popupOpenCard = new PopupWithImage("#popupOpenCard");
  popupOpenCard.setEventListeners();

  const popupDeleteConfirmation = new PopupWithConfirmation(
    "#popupWithConfirmation"
  );
  popupDeleteConfirmation.setEventListeners();

  // Uso del FormValidator
  const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
  };

  // enableValidation(settings);
  const formValidate = new FormValidator(settings);
  formValidate.enableValidation();

  // Eventos Listener para botones
  btnAdd.addEventListener("click", () => popupAddCard.open());
});
