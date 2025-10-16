import { useEffect, useState } from "react";

import "../index.css";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

import api from "../utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({}); // Estado para el usuario actual
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]); //Array vacio como valor inicial

  useEffect(() => {
    // Obtener información del usuario al montar el componente
    api
      .getUser()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
      });
  }, []); // Array vacío = solo se ejecuta al montar

  function handleUpdateProfile(name, about) {
    api
      .userEdit(name, about)
      .then((res) => {
        setCurrentUser(res);
        handleClosePopup();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Agregando una nueva Tarjeta
  function handleAddCard(name, link) {
    api
      .createCard(name, link)
      .then((res) => {
        console.log("Estoy agregando una nueva tarjeta", res);
        handleClosePopup();
        // Aqui debo actualizar o recargar la pantalla
        setCards([res, ...cards]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Actualizando el Imagen del Avatar
  function handleChangeAvatar(linkAvatar) {
    console.log("Estoy cambiando el Avatar", linkAvatar);
    api
      .avatarEdit(linkAvatar)
      .then((res) => {
        console.log(linkAvatar);
        // Actualiza el estado del avatar con setCurrentUser
        setCurrentUser(res);
      })
      .catch((error) => {
        console.error("Error al actualizar el avatar:", error);
      });
    handleClosePopup();
  }

  // Eliminar Tarjerta
  function handleCardDelete(id) {
    // Arreglo de nuevas tarjetas con algunas eliminadas
    const updatedCards = cards.filter((currentCard) => {
      return currentCard._id !== id;
    });
    api
      .deleteCard(id)
      .then(() => {
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Error al actualizar el avatar:", error);
      });
    handleClosePopup();
  }

  // Abrir Popup
  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log("Open popup");
  }
  // Cerrar Popup
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateProfile,
          handleAddCard,
          cards,
          setCards,
          handleChangeAvatar,
          handleCardDelete,
        }}
      >
        <div className="page__content">
          <Header />
          <Main
            popup={popup}
            handleClosePopup={handleClosePopup}
            handleOpenPopup={handleOpenPopup}
            handleChangeAvatar={handleChangeAvatar}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
