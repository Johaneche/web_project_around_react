import { useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

//
function NewCard(props) {
  const { handleAddCard } = useContext(CurrentUserContext);

  //Evita Comportamiento Predeterminado
  function handleSubmit(event) {
    event.preventDefault();
    handleAddCard(
      event.target.elements.title.value,
      event.target.elements.url.value
    );
    // console.log(event.target.elements);
  }

  return (
    <form
      className="popup__form popup__form-add"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="popup__title">Nuevo Lugar</h2>

      <div className="popup__form-content">
        <label className="popup__field">
          <input
            className="popup__input popup__input_title"
            id="title"
            maxLength="30"
            minLength="2"
            name="card-title"
            placeholder="Title"
            required
            type="text"
          />
          <span className="popup__title-error" id="title-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_url"
            id="url"
            name="url"
            placeholder="URL de la imagen"
            required
            type="url"
          />
          <span className="popup__url-error" id="url-error"></span>
        </label>
      </div>

      <button className="popup__button popup__button_add" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;
