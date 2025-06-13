//Las 6 Tarjetas Iniciales
const initialCards = [
  {
    name: "Central Park, NYC",
    link: "./images/img1-central-park (2).jpg",
  },
  {
    name: "Bear Mountain, NY",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Liberty State Park, NJ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Manhattan, NY",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Times Square, NY",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Vessel, NY",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Agregando las Clases a utilizar
let popUp = document.querySelector(".popup");
let nameDefault = document.querySelector(".main__paragraph_name");
let occupationDefault = document.querySelector(".main__paragraph_occupation");

// Agregando los Botones a utilizar
let btnEdit = document.querySelector(".main__button_edit");
let btnCloseWindow = popUp.querySelector(".popup__button_close");
let btnSave = popUp.querySelector(".popup__button_save");

// Agregando los Inputs
let inName = document.querySelector(".popup__input_name");
let inOccupation = document.querySelector(".popup__input_occupation");

// Abrir la ventana de Editar
function editWindow() {
  popUp.classList.add("popup__opened"); // Agrego la clase al popup para que sea visible

  inName.value = nameDefault.textContent.trim(); // Me aparezca el nombre del perfil a modificar
  inOccupation.value = occupationDefault.textContent.trim(); // Me aparezca la ocupacion del perfil a modificar
}

// Cerrar la ventana de Editar
function closeWindow() {
  popUp.classList.remove("popup__opened"); // Elimino la clase al popup para que NO sea visible
}

function saveInfo() {
  nameDefault.textContent = inName.value; //Cambio el nombre actual por el valor que hay el input
  occupationDefault.textContent = inOccupation.value; //Cambio la ocupacion actual por el valor que hay el input
  closeWindow();
}

btnEdit.addEventListener("click", editWindow);
btnCloseWindow.addEventListener("click", closeWindow);
btnSave.addEventListener("click", saveInfo);

//
