class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // metodo getUser
  getUser() {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: this.headers,
      })
        // .then((res) => res.json()) //otro proceso asincrono
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
        })
    );
  }

  // modificar el usuario
  userEdit(name, about) {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/users/me/`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about,
        }),
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
    );
  }

  // modificar el avatar
  avatarEdit(avatar) {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar,
        }),
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
    );
  }

  // metodo get initial cards
  getInitialCards() {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/cards`, {
        method: "GET",
        headers: this.headers,
      })
        // .then((res) => res.json()) //otro proceso asincrono
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
        })
    );
  }

  createCard(name, link) {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
    );
  }

  deleteCard(cardId) {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this.headers,
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
    );
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "e1c847d7-12c5-4195-b7a6-a90857c56bff",
    "Content-Type": "application/json",
  },
});

export { api };
