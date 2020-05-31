const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

// Your code goes here
let xhr = new XMLHttpRequest();

const title = document.createElement('h1');

const form = document.createElement('form');
const inputName = document.createElement('input');
const inputNickName = document.createElement('input');

const submitBtn = document.createElement('button');
const loader = document.createElement('h2');

const list = document.createElement('ul');


list.className = 'list';
loader.innerText = 'Loading...';
title.innerText = 'Manage User App';
submitBtn.type = 'submit';
submitBtn.innerText = 'Add new user';

form.name = 'user';
form.addEventListener('submit', handleSubmit);
form.append(inputName, inputNickName, submitBtn );


appContainer.append(title, form, loader);


let users = '';

function handleSubmit(key) { //POST

  key.preventDefault();
  const newUser = JSON.stringify({

    name: inputName.value,
    username: inputNickName.value
  });

  xhr.open('POST', `${baseUrl}/users`);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr.onload = function () {
    submitBtn.setAttribute('disabled', true);
    if (xhr.status !== 200) {

      console.log(`error ${xhr.status}: ${xhr.statusText}`);
    }
    if (xhr.readyState === 4 && xhr.status === 201) {

      inputName.value = '';
      inputNickName.value = '';
      window.location.reload();
    }
  };

  xhr.send(newUser);
}

const fetchUsers = () => { // GET
  xhr.open('GET', `${baseUrl}/users`);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log(`error ${xhr.status}: ${xhr.statusText}`);
    } else {
      users = JSON.parse(xhr.response);
      users.map((user) => createListItem(user));
    }
  };

  xhr.onprogress = function (e) {
    if (e.loaded === e.total) {
      appContainer.removeChild(loader);
      appContainer.appendChild(list);
    }
  };

  xhr.send();
};

function createListItem(user) {
  const list = document.querySelector('.list');
  const li = document.createElement('li');
  const spanId = document.createElement('span');
  const updateBtn = document.createElement('button');
  const dltBtn = document.createElement('button');
  const inputName = document.createElement('input');
  const inputNickName = document.createElement('input');

  li.className = 'listItem';
  spanId.className = 'listItem__id';
  dltBtn.className = 'listItem__dltBtn';
  updateBtn.className = 'listItem__edit';
  inputName.className = 'listItem__name';
  inputNickName.className = 'listItem__username';

  list.appendChild(li);
  li.append(spanId, inputName, inputNickName, updateBtn, dltBtn);
  
  spanId.innerText = user.id;
  updateBtn.innerText = 'Update';
  dltBtn.innerText = 'Delete';
  inputName.value = user.name;
  inputNickName.value = user.username;

  dltBtn.addEventListener('click', function () { //DELETE

    xhr.open('DELETE', `${baseUrl}/users/${user.id}`);
    xhr.setRequestHeader('Authorization', 'admin');
    window.location.reload();
    xhr.send();
  });

  updateBtn.addEventListener('click', function () { //PUT
    
    xhr.open('PUT', `${baseUrl}/users/${user.id}`);

    const updatedUser = JSON.stringify({
      name: inputName.value,
      username: inputNickName.value
    });

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(updatedUser);
  });
}

fetchUsers();
