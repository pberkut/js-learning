//

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const refs = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-container'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { title, message } = evt.currentTarget.elements;

  const myPost = {
    title: title.value,
    body: message.value,
  };

  createPost(myPost).then(console.log).catch(console.log);
}
// getPost(1).then(console.log).catch(console.log);
// getAllPost().then(console.log).catch(console.log);
// createPost().then(console.log).catch(console.log);
// updatePost(2).then(console.log).catch(console.log);
// changePost(3).then(console.log).catch(console.log);

function getAllPost() {
  return fetch(`${BASE_URL}`).then(r => r.json());
}

function getPost(postId) {
  return fetch(`${BASE_URL}/${postId}`).then(r => r.json());
}

function createPost(myPost) {
  //   const myPost = {
  //     title: 'First title',
  //     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim perferendis earum, magni nesciunt quod unde eligendi repellendus, maiores cumque cupiditate praesentium, harum veritatis aliquam delectus hic quibusdam! Quo, facere!',
  //   };

  const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  };

  return fetch(BASE_URL, options).then(r => r.json());
}

function updatePost(postId) {
  const myPost = {
    title: 'I update this title',
    body: 'I update this text in body',
  };

  const options = {
    method: 'PUT',
    body: JSON.stringify(myPost),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  };

  return fetch(`${BASE_URL}/${postId}`, options).then(r => r.json());
}

function changePost(postId) {
  const myPost = {
    title: 'This title change from VSCode',
  };

  const options = {
    method: 'PATCH',
    body: JSON.stringify(myPost),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  };

  return fetch(`${BASE_URL}/${postId}`, options).then(r => r.json());
}

function removePost(postId) {
  options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/${postId}`, options).then(r => r.json());
}
