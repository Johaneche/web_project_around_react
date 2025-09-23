import ImagePopup from "../Popup/ImagePopup/ImagePopup";

function Card(props) {
  const { name, link, isLiked } = props.card;

  const newImagePopup = { children: <ImagePopup name={name} link={link} /> };

  function handleClick() {
    props.onHandleOpenPopup(newImagePopup);
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
      ></button>

      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__button card__button_like"
        ></button>
      </div>
    </div>
  );
}

export default Card;
