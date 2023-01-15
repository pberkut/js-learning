const BASE_URL = 'http://localhost:3000/users';

export default class UsersApiService {
  constructor() {}

  getAllUsers() {
    return fetch(BASE_URL).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    });
  }

  getUserById(userId) {
    return fetch(`${BASE_URL}/${userId}`).then(r => {
      if (!r.ok) {
        throw new Error(r.statusText);
      }

      return r.json();
    });
  }

  newUser(user) {
    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    return fetch(BASE_URL, options).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    });
  }

  updateUser(update, userId) {
    const url = `${BASE_URL}/${userId}`;

    const options = {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    };

    return fetch(url, options).then(r => {
      if (!r.ok) {
        throw new Error(statusText);
      }

      return r.json();
    });
  }

  removeUser(userId) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${BASE_URL}/${userId}`, options).then(r => {
      if (!r.ok) {
        throw new Error(r.statusText);
      }

      return r.json();
    });
  }
}
