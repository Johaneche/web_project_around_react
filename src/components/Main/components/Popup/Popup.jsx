function Popup(props) {
  // se ha desestructurado onClose de props
  const { onClose, children } = props;

  return (
    <div className="popup popup__opened">
      <div className="popup__container">
        <button
          className="popup__button popup__button_close"
          aria-label="Close modal"
          type="button"
          onClick={onClose} // llama a onClose al hacer clic en el botón
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
