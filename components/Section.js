export default class Section {
  constructor({ item, renderer }, containerSelector) {
    this._renderedItems = item;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    // La función renderizará cada elemento en una página.
    this._renderedItems.forEach((item) => {
      this._renderer(item); // llama a renderer() y pásale item
    });
  }

  addItem(element) {
    // Almacena un método público llamado addItem() que toma un elemento del DOM
    // y lo agrega al contenedor.

    this._container.prepend(element);
  }
}
