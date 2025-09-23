function EditAvatar() {
  return (
    <form className="popup__form popup__form-avatar" id="formAvatar">
      <h2 className="popup__title">Cambiar foto de Perfil</h2>
      <fieldset className="popup__form-content">
        <input
          id="linkAvatar"
          name="linkAvatar"
          className="popup__input popup__input_link"
          type="url"
          placeholder="Link de la imagen"
          required
        />
        <span className="popup__link-error" id="linkAvatar-error"></span>
      </fieldset>
      <button type="submit" className="popup__button popup__button_change">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
