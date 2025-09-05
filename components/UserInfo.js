export default class UserInfo {
  constructor({ name, about, avatar }) {
    this.nameElement = document.querySelector(name);
    this.aboutElement = document.querySelector(about);
    this.avatarElement = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent,
    };
  }

  setUserInfo(name, about) {
    // Almacena un método público llamado setUserInfo(), que toma los datos
    // del nuevo usuario y los agrega en la página.
    this.nameElement.textContent = name;
    this.aboutElement.textContent = about;
  }

  changeAvatar(data) {
    this.avatarElement.src = data;
  }
}
