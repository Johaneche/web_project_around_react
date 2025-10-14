//
import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";
import api from "../../../../../utils/api";
//

function EditProfile() {
  //
  const { currentUser, handleUpdateProfile } = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [occupation, setOccupation] = useState(currentUser.about); // Agrega la variable de estado para description
  // console.log("El nombre es", name, occupation);

  // Actualiza name cuando cambie la entrada
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Actualiza description cuando cambie la entrada
  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  // Actualizar el perfil

  //Evita Comportamiento Predeterminado
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateProfile(name, occupation);
  };

  //

  return (
    <form
      className="popup__form popup__form-edit"
      id="formEdit"
      onSubmit={handleSubmit}
    >
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
        value={name} //Vinculando name con la entrada
        onChange={handleNameChange} // Vinculando el controlador handleNameChange
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
        value={occupation}
        onChange={handleOccupationChange} // Vinculando el controlador handleOccupationChange
      />
      <span className="popup__about-error" id="about-error"></span>
      <button className="popup__button popup__button_save" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;
