import { useContext } from "react";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import api from "../../../../utils/api";
import DeleteCardConfirmation from "../Popup/DeleteCard/DeleteCardConfirmation";

function Card(props) {
  const { name, link, isLiked, _id } = props.card;
  const { currentUser } = useContext(CurrentUserContext);

  const newImagePopup = { children: <ImagePopup name={name} link={link} /> };
  const deleteCardConfirmation = {
    title: "Eliminar Tarjeta",
    children: <DeleteCardConfirmation cardId={_id} />,
  };

  function handleClick() {
    props.onHandleOpenPopup(newImagePopup);
  }

  // Determinar la clase CSS basado en isLiked
  const cardLikeButtonClassName = `card__button card__button_like ${
    isLiked ? "card__button_like_active" : ""
  }`;

  function updateLikeCard() {
    api
      .changeStatusLikeCard(_id, isLiked)
      .then((newCard) => {
        // console.log(newCard);
        props.onHandleLikeClick(newCard);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="card__container">
      <img
        className="card__img"
        src={link}
        alt="Debe carga la imagen de la tarjeta"
        onClick={handleClick}
      />

      <button
        aria-label="Delete card"
        type="button"
        className="card__button card__button_delete"
        onClick={(evt) => props.onHandleOpenPopup(deleteCardConfirmation)}
      ></button>

      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={updateLikeCard}
        ></button>
      </div>
    </div>
  );
}

export default Card;
