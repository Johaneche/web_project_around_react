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

  // Abrir Popup
  function handleOpenPopup(popup) {
    setPopup(popup);
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
        }}
      >
        <div className="page__content">
          <Header />
          <Main
            popup={popup}
            handleClosePopup={handleClosePopup}
            handleOpenPopup={handleOpenPopup}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
