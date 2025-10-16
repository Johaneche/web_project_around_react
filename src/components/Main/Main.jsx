import { useEffect, useState } from "react";

import avatarImg from "../../images/img-main-profile.png";
import editButton from "../../images/edit-button.svg";
import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup.jsx";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar.jsx";
import EditProfile from "./components/Popup/EditProfile/EditProfile.jsx";
import NewCard from "./components/Popup/NewCard/NewCard.jsx";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup.jsx";
import api from "../../utils/api.js";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

// const cards = [
//   {
//     isLiked: false,
//     _id: "5d1f0611d321eb4bdcd707dd",
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//     owner: "5d1f0611d321eb4bdcd707dd",
//     createdAt: "2019-07-05T08:10:57.741Z",
//   },
//   {
//     isLiked: false,
//     _id: "5d1f064ed321eb4bdcd707de",
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
//     owner: "5d1f0611d321eb4bdcd707dd",
//     createdAt: "2019-07-05T08:11:58.324Z",
//   },
// ];

// console.log(cards);

function Main({ popup, handleClosePopup, handleOpenPopup }) {
  const { currentUser, cards, setCards } = useContext(CurrentUserContext);

  const newEditAvatar = {
    title: "Editar Avatar",
    children: <EditAvatar />,
  };
  const newEditProfile = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  // Creando el useEfect
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData); // Actualiza el estado con las tarjetas de la API
      })
      .catch((error) => {
        console.error("Error al obtener las tarjetas:", error);
      });
  }, []); // Array vacío = solo se ejecuta al montar el componente

  function handleLikeClick(newCard) {
    // Arreglo de nuevas tarjetas con like
    const newArray = cards.map((card) => {
      if (card._id === newCard._id) {
        card = newCard;
      }
      return card;
    });

    setCards(newArray);
  }

  return (
    <main className="content">
      <section className="main">
        <img
          className="main__img-profile"
          src={currentUser.avatar}
          alt="Cargar la imagen del perfil"
          onClick={() => {
            handleOpenPopup(newEditAvatar);
          }}
        />

        <div className="main__content-paragraph">
          <h1 className="main__paragraph main__paragraph_name">
            {currentUser.name}
          </h1>
          <button
            className="main__button main__button_edit"
            onClick={() => handleOpenPopup(newEditProfile)}
          >
            <img
              className="main__button-img"
              src={editButton}
              alt="Cargar la imagen del boton editar"
            />
          </button>
          <h2 className="main__paragraph main__paragraph_about">
            {currentUser.about}
          </h2>
        </div>
        <button
          aria-label="Add card"
          className="main__button main__button_add"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          +
        </button>
      </section>

      <section className="gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onHandleOpenPopup={handleOpenPopup}
            onHandleLikeClick={handleLikeClick}
            // handleCardDelete={handleCardDelete}
          />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
