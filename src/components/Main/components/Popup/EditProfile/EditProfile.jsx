function EditProfile() {
  return (
    <form className="popup__form popup__form-edit" id="formEdit">
      <h2 className="popup__title">Editar Perfil</h2>
      <input
        id="name"
        name="name"
        className="popup__input popup__input_name"
        type="text"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__name-error" id="name-error"></span>

      <input
        id="about"
        name="about"
        className="popup__input popup__input_about"
        type="text"
        placeholder="Ocupacion"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__about-error" id="about-error"></span>
      <button className="popup__button popup__button_save">Guardar</button>
    </form>
  );
}

export default EditProfile;
