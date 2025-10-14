export function DeleteCardConfirmation({ handleCardDelete }) {
  //Evita Comportamiento Predeterminado
  function handleSubmit(event) {
    event.preventDefault();
    handleCardDelete(event.target.elements.id);

    console.log(event.target.elements.id.value);
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
