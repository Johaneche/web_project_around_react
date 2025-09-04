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

// Intanciando la clase Api
// console.log(api);

const userProfileConfig = {
  name: ".main__paragraph_name",
  occupation: ".main__paragraph_occupation",
  avatar: ".main__img-profile",
};

// apiUser separado de la apiCard
// aqui va el codigo

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
          }
        );

        cardSection.addItem(newCard.createCard());
      },
    },
    ".gallery"
  );
  cardSection.renderer();

  // Agregando el Usuario
  const userProfile = new UserInfo({
    name: userProfileConfig.name,
    occupation: userProfileConfig.occupation,
    avatar: userProfileConfig.avatar,
  });

  // Instanciando las clases
  const popupProfile = new PopupWithForm(
    "#popupProfile",
    ".popup__form-edit",
    (data) => {
      // console.log(data);
      api
        .userEdit(data.name, data.occupation)
        .then(function () {
          userProfile.setUserInfo(data.name, data.occupation);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
  popupProfile.setEventListeners();

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

  const popupDeleteConfirmation = new PopupWithConfirmation(
    "#popupWithConfirmation"
  );
  popupDeleteConfirmation.setEventListeners();
  // newConfirmation();

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
  btnEdit.addEventListener("click", () => popupProfile.open());
  btnAdd.addEventListener("click", () => popupAddCard.open());
  changeAvatar.addEventListener("click", () => popupChangeAvatar.open());
  changeAvatar.addEventListener("click", () => popupChangeAvatar.open());

  // Evento para eliminar la tarjeta
  // Crear una nueva clase para motrar el popup de validacion de eliminar extends de popup.
  // metodo de

  // debo de pasarle el id de la tarjeta que voy a eliminar
  // debo hacerle llegar el id desde la instancia de la clase card hasta mi metodo deleteCard
  // acoplamient debil clase card con la api

  // Agregar Tarjeta
  function addCard(data) {
    const newCard = new Card(data, ".card__container", () => {
      popupOpenCard.open(data.name, data.link);
    });
    return newCard.createCard();
  }
});

// export { settings };
