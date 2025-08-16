import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { galleryContainer, btnEdit, btnAdd } from "../utils/utils.js";

import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const popupProfile = new PopupWithForm(
  "#popupProfile",
  ".popup__form-edit",
  (data) => {
    console.log(data);
    userProfile.setUserInfo(data.name, data.occupation);
  }
);
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(
  "#popupAddCard",
  ".popup__form-add",
  (data) => {
    console.log(data);
    const newCard = new Card(
      data.title,
      data.url,
      ".card__container",
      (title, link) => {
        // Abrimos la carta
        popupOpenCard.open(title, link);
      }
    );

    const cardElement = newCard.createCard();
    galleryContainer.prepend(cardElement);
  }
);

popupAddCard.setEventListeners();

const popupOpenCard = new PopupWithImage("#popupOpenCard");
popupOpenCard.setEventListeners();

const userProfileConfig = {
  name: ".main__paragraph_name",
  occupation: ".main__paragraph_occupation",
};

const userProfile = new UserInfo({
  name: userProfileConfig.name,
  occupation: userProfileConfig.occupation,
});

//Las 6 Tarjetas Iniciales
const initialCards = [
  {
    name: "Central Park, NYC",
    link: "./images/img1-central-park.png",
  },
  {
    name: "Bear Mountain, NY",
    link: "./images/img1-bear-mountain.png",
  },
  {
    name: "Liberty State Park, New Jersey",
    link: "./images/img2-hoboken.png",
  },
  {
    name: "Manhattan, NY",
    link: "./images/img3-manhathan.png",
  },
  {
    name: "Times Square, NY",
    link: "./images/img4-timesquare.png",
  },
  {
    name: "Vessel, NY",
    link: "./images/img5-vessel.png",
  },
];

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

// Agregar Tarjeta
function addCard(data) {
  const newCard = new Card(data.name, data.link, ".card__container", () => {
    popupOpenCard.open(data.title, data.link);
  });
  return newCard.createCard();
}

// Agregando la seccion
const cardSection = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      cardSection.addItem(addCard(item));
    },
  },
  ".gallery"
);

cardSection.renderer();

export { settings };
