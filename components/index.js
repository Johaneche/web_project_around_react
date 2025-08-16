import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  addWindow,
  closeWindow,
  editWindow,
  saveInfo,
} from "../utils/utils.js";

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
    // pasar los datos par agregar la carta
    // title y link

    const newCard = new Card(
      data.title,
      data.url,
      ".card__container",
      (title, link) => {
        // openpopimg
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

const userProfile = new UserInfo({
  name: ".main__paragraph_name",
  occupation: ".main__paragraph_occupation",
});

// newPopUp.open();

// Agregando las Clases a utilizar
const popUp = document.querySelector(".popup");
// const popAddCard = document.querySelector(".popupAddCard");
const nameDefault = document.querySelector(".main__paragraph_name");
const occupationDefault = document.querySelector(".main__paragraph_occupation");
const popFormEdit = document.querySelector(".popup__form-edit");
const popFormAdd = document.querySelector(".popup__form-add");
const popImages = document.querySelector(".popup__images");
const popHidden = document.querySelector(".popup__hidden");
const galleryContainer = document.querySelector(".gallery");

// Agregando los Botones a utilizar
const btnEdit = document.querySelector(".main__button_edit");
const btnCloseWindow = popUp.querySelector(".popup__button_close");
// const btnCloseAddWindow = popAddCard.querySelector(".popup__button_close");
const btnEditSave = popUp.querySelector(".popup__button_save");
const btnAdd = document.querySelector(".main__button_add");
const btnAddSave = document.querySelector(".popup__button_add");
const btnLike = document.querySelectorAll(".gallery__button_like");
const btnDelete = document.querySelector(".gallery__button_delete");
const btnCard = document.querySelector(".gallery__img");

// Agregando los Inputs
const inName = document.querySelector(".popup__input_name");
const inOccupation = document.querySelector(".popup__input_occupation");
const inTitle = document.querySelector(".popup__input_title");
const inURL = document.querySelector(".popup__input_url");

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

// Cargando las cartas iniciales con el Section
// const newSection = new Section({ initialCards });

// Cargando cartas iniciales
// initialCards.forEach((item) => {
//   const newCard = new Card(
//     item.name,
//     item.link,
//     ".card__container",
//     (title, link) => {
//       // openpopimg
//       popupOpenCard.open(title, link);
//     }
//   );

//   const cardElement = newCard.createCard();
//   galleryContainer.append(cardElement);
// });

// Eventos Listener para botones

// btnEdit.addEventListener("click", editWindow);
btnEdit.addEventListener("click", () => popupProfile.open());
// btnEditSave.addEventListener("click", saveInfo);

// btnAdd.addEventListener("click", addWindow);
btnAdd.addEventListener("click", () => popupAddCard.open());

// Agregar Tarjeta
// function addCard() {
//   const newCard = new Card(inTitle.value, inURL.value);
//   const cardElement = newCard._createCard();
//   galleryContainer.prepend(cardElement);
//   closeWindow();
// }

// Agregar Tarjeta
function addCard(cardData) {
  const newCard = new Card(
    cardData.name,
    cardData.link,
    ".card__container",
    () => {
      // title, link
      // openpopimg
      popupOpenCard.open(title, link);
    }
  );
  return newCard.createCard();
}

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
