import { useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function DeleteCardConfirmation({ cardId }) {
  const { handleCardDelete } = useContext(CurrentUserContext);

  function handleSubmit(event) {
    //Evita Comportamiento Predeterminado
    event.preventDefault();
    console.log(cardId);
    handleCardDelete(cardId);
  }

  return (
    <form
      className="popup__form form form__delete-confirm"
      id="form-delete-confirm"
      onSubmit={handleSubmit}
    >
      <div className="popup__title">¿Estás seguro?</div>
      <button
        type="submit"
        className="popup__button popup__button_add"
        id="form-avatar-button"
      >
        Sí
      </button>
    </form>
  );
}

export default DeleteCardConfirmation;
