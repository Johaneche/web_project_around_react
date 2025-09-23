function ImagePopup(props) {
  const { link, name, title } = props;

  return (
    <div className="popup__images">
      <img
        className="popup__image popup__content_content_image"
        src={link}
        alt="Debe cargar la imagen de la tarjeta"
      />
      <div className="popup__text-content">
        <h2 className="popup__text">{name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
