// Agregando las Clases a utilizar
const popUp = document.querySelector(".popup");
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

initialCards.forEach((card) => {
  createCard(card.name, card.link);
});

// Funcion para Crear Tarjeta
function createCard(title, link) {
  // Clonar template
  const cardTemplate = document.querySelector("#card__template").content;
  const galleryCard = cardTemplate
    .querySelector(".card__container")
    .cloneNode(true);

  const galleryImg = galleryCard.querySelector(".card__img");

  galleryImg.src = link;
  galleryImg.alt = title;

  const galleryBtnDelete = galleryCard.querySelector(".card__button_delete");

  const galleryContent = galleryCard.querySelector(".card__content");
  galleryContent.querySelector(".card__title").textContent = title;

  const galleryBtnLike = galleryCard.querySelector(".card__button_like");

  // clono a galleryCard en la seccion de gallery (HTML)
  galleryContainer.prepend(galleryCard);

  // Boton Eliminar
  galleryBtnDelete.addEventListener("click", function () {
    galleryCard.remove();
  });

  // Boton Me gusta
  galleryBtnLike.addEventListener("click", function () {
    galleryBtnLike.classList.toggle("card__button_like_active");
  });

  const popImage = document.querySelector(".popup__image");
  const popText = document.querySelector(".popup__text");

  // Boton Imagen: Abrir Ventana Imagen
  galleryImg.addEventListener("click", function () {
    document.addEventListener("keydown", keyPush); // Evento listener Escape
    popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
    popFormAdd.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
    popFormEdit.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible

    popImage.setAttribute("src", link);
    popText.textContent = title;
  });
}

// Funcion Cerrar ventana: Popup
function closeWindow() {
  popUp.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
  popFormAdd.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  popFormEdit.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  popImages.classList.remove("popup__hidden"); // Elimino la clase para que sea visible
  document.removeEventListener("keydown", keyPush); //Elimino la clase keyPush
}

// Funcion Abrir ventana: Agregar Tarjeta
function addWindow() {
  document.addEventListener("keydown", keyPush); // Evento listener Escape
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  popFormEdit.classList.add("popup__hidden"); // Agrego la clase al popup__form-edit para que sea no visible
  popImages.classList.add("popup__hidden"); // Agrego la clase al popup__images para que sea no visible
}

// Funcion Abrir ventana: Editar
function editWindow() {
  document.addEventListener("keydown", keyPush); // Evento listener Escape
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible
  popFormAdd.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  popImages.classList.add("popup__hidden"); // Agrego la clase al popup__hidden para que sea no visible
  inName.value = nameDefault.textContent.trim(); // Me aparezca el nombre del perfil a modificar
  inOccupation.value = occupationDefault.textContent.trim(); // Me aparezca la ocupacion del perfil a modificar
}

function saveInfo(evt) {
  evt.preventDefault();
  nameDefault.textContent = inName.value; //Cambio el nombre actual por el valor que hay el input
  occupationDefault.textContent = inOccupation.value; //Cambio la ocupacion actual por el valor que hay el input
  closeWindow();
}

function addCard() {
  createCard(inTitle.value, inURL.value);

  inTitle.value = "";
  inURL.value = "";
  closeWindow();
}
// Funcion validacion Tecla Presionada
function keyPush(evt) {
  if (evt.key === "Escape") {
    closeWindow();
  }
}

// Eventos Listener para botones
btnCloseWindow.addEventListener("click", closeWindow);
btnEdit.addEventListener("click", editWindow);
btnEditSave.addEventListener("click", saveInfo);
btnAdd.addEventListener("click", addWindow);
btnAddSave.addEventListener("click", addCard);

// Eventos Listener para Click

popUp.addEventListener("click", function (evt) {
  if (evt.target === popUp) {
    closeWindow();
  }
});
