// Agregando las Clases a utilizar
let popUp = document.querySelector(".popup");
let nameDefault = document.querySelector(".main__paragraph_name");
let occupationDefault = document.querySelector(".main__paragraph_occupation");
let popFormEdit = document.querySelector(".form__edit");
let popFormAdd = document.querySelector(".form__add");
let popImages = document.querySelector(".popup__images");
let popHidden = document.querySelector(".popup__hidden");
const galleryContainer = document.querySelector(".gallery");

// Agregando los Botones a utilizar
let btnEdit = document.querySelector(".main__button_edit");
let btnCloseWindow = popUp.querySelector(".popup__button_close");
let btnEditSave = popUp.querySelector(".popup__button_save");
let btnAdd = document.querySelector(".main__button_add");
let btnAddSave = document.querySelector(".popup__button_add");
const btnLike = document.querySelectorAll(".gallery__button_like");
const btnDelete = document.querySelector(".gallery__button_delete");
const btnCard = document.querySelector(".gallery__img");

// Agregando los Inputs
let inName = document.querySelector(".popup__input_name");
let inOccupation = document.querySelector(".popup__input_occupation");
let inTitle = document.querySelector(".popup__input_title");
let inURL = document.querySelector(".popup__input_url");

//Las 6 Tarjetas Iniciales
const initialCards = [
  {
    name: "Central Park, NYC",
    link: "./images/img1-central-park (2).jpg",
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

initialCards.forEach((card) => {
  createCard(card.name, card.link);
});

// Funcion para Crear Tarjeta
function createCard(title, link) {
  const galleryCard = document.createElement("div");
  galleryCard.classList.add("gallery__card");

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__img");
  galleryImg.setAttribute("src", link);
  galleryImg.setAttribute("alt", "Debe carga la imagen de la tarjeta");

  const galleryBtnDelete = document.createElement("button");
  galleryBtnDelete.classList.add("gallery__button");
  galleryBtnDelete.classList.add("gallery__button_delete");

  const galleryContent = document.createElement("div");
  galleryContent.classList.add("gallery__content");

  const galleryText = document.createElement("h2");
  galleryText.classList.add("gallery__text");
  galleryText.textContent = title;

  const galleryBtnLike = document.createElement("button");
  galleryBtnLike.classList.add("gallery__button");
  galleryBtnLike.classList.add("gallery__button_like");

  galleryCard.append(galleryImg, galleryBtnDelete, galleryContent);
  galleryContent.append(galleryText, galleryBtnLike);
  galleryContainer.prepend(galleryCard);

  // Boton Eliminar
  galleryBtnDelete.addEventListener("click", function () {
    galleryCard.remove();
  });

  // Boton Me gusta
  galleryBtnLike.addEventListener("click", function () {
    galleryBtnLike.classList.toggle("gallery__button_like_active");
  });

  // Abrir Ventana Imagen
}

// Funcion Cerrar ventana: Popup
function closeWindow() {
  popUp.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
  popFormAdd.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  popFormEdit.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  popImages.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
}

// Funcion Abrir ventana: Agregar Tarjeta
function addWindow() {
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  popFormEdit.classList.add("popup__hidden"); // Agrego la clase al form__edit para que sea no visible
  popImages.classList.add("popup__hidden"); // Agrego la clase al popup__images para que sea no visible
}

// Funcion Abrir ventana: Editar
function editWindow() {
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  popFormAdd.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  popImages.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  inName.value = nameDefault.textContent.trim(); // Me aparezca el nombre del perfil a modificar
  inOccupation.value = occupationDefault.textContent.trim(); // Me aparezca la ocupacion del perfil a modificar
}

// Funcion Abrir ventana: Tarjeta
// function cardWindow() {
//   popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
//   popFormAdd.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
//   popFormEdit.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
// }

function saveInfo() {
  nameDefault.textContent = inName.value; //Cambio el nombre actual por el valor que hay el input
  occupationDefault.textContent = inOccupation.value; //Cambio la ocupacion actual por el valor que hay el input
  closeWindow();
}

function addCard() {
  createCard(inTitle.value, inURL.value);
  console.log(createCard);

  inTitle.value = "";
  inURL.value = "";
  closeWindow();
}

// Eventos
btnCloseWindow.addEventListener("click", closeWindow);
btnEdit.addEventListener("click", editWindow);
btnEditSave.addEventListener("click", saveInfo);
btnAdd.addEventListener("click", addWindow);
btnAddSave.addEventListener("click", addCard);
