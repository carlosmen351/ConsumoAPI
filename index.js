const API_URL = 'https://randomuser.me/api/';

const HTMLResponse = document.querySelector('#app');
const template = document.createElement('div');
template.className = 'container';

fetch(`${API_URL}`)
  .then((response) => response.json())
  .then((results) => {
    results.results.forEach((result) => {
      template.innerHTML = `
        <div class = "card">
          <div class = "front">
            <h2>${result.name.first} ${result.name.last}</h2>
            <img src="${result.picture.large}" alt="${result.name.first}">
          </div>
          <div class = "back" >
            <img src="${result.picture.medium}" alt="${result.name.first}">
            <ul>
              <li>${result.phone}</li>
              <li>${result.email}</li>
              <li>${result.location.country}</li>
            </ul>
          </div>
        </div>
      `;
    });
    HTMLResponse.appendChild(template);
  });