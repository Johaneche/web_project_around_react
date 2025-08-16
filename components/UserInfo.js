export default class UserInfo {
  constructor({ name, occupation }) {
    this.nameElement = document.querySelector(name);
    this.occupationElement = document.querySelector(occupation);
    // console.log(this.nameElement);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      occupation: this.occupationElement.textContent,
    };
  }

  setUserInfo(name, occupation) {
    // Almacena un método público llamado setUserInfo(), que toma los datos
    // del nuevo usuario y los agrega en la página.
    this.nameElement.textContent = name;
    this.occupationElement.textContent = occupation;
  }
}
