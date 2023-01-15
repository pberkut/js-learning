import Notiflix from 'notiflix';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

import UsersApiService from './api-service';

const usersApiService = new UsersApiService();
const container = document.querySelector('.js-container');
const getAllUsersBtn = document.querySelector('.js-get-btn');

console.log(getAllUsersBtn);
getAllUsersBtn.addEventListener('click', onGetUsers);
container.addEventListener('click', onRemoveUser);

function onRemoveUser(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const userId = evt.target.dataset.index;
  removeUser(userId);
  getAllUsers();
}

function onGetUsers() {
  getAllUsers();
}

function getAllUsers() {
  usersApiService.getAllUsers().then(renderUsers).catch(onError);
}

function removeUser(userId) {
  usersApiService.removeUser(userId).then(console.log).catch(onError);
}

function onError(err) {
  Notiflix.Notify.failure(err);
}
function renderUsers(users) {
  const markupUsers = users
    .map((user, idx) => {
      const { firstName, lastName, age } = user;

      return `
         <tr>
      <th scope="row">${idx}</th>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${age}</td>
      <td><button class="js-remove-btn" type="button" data-index="${idx}">X</button></td>
    </tr>
          `;
    })
    .join('');

  const markupTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Age</th>
      <th scope="col">Control</th>
    </tr>
  </thead>
  <tbody>
${markupUsers}
  </tbody>
</table>`;

  console.log(users);

  container.innerHTML = markupTable;
}
