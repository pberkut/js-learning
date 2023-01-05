import debounce from 'lodash.debounce';

const formRef = document.querySelector('[name=form]');
const container = document.querySelector('.js-container');

// const name = 'ukraine';

formRef.addEventListener('input', debounce(onSearch, 300));

function onSearch(e) {
  console.log(e);
  e.preventDefault();

  const inputSearch = e.target.value;
  console.dir(inputSearch);

  fetch(`https://restcountries.com/v3.1/name/${inputSearch}?fullText=false`)
    .then(resp => resp.json())
    .then(getCountry)
    .catch(fetchError);
}

function getCountry(countrys) {
  console.log(countrys);
  markupCountry(countrys);
}

function markupCountry(countrys) {
  const markup = countrys
    .map(country => {
      console.log(country);
      return `
      
    <p class="name-flag"><img class="img-flag" src="${country.flags.svg}" alt="${country.name.common}"> ${country.name.common}</p>
    `;
    })
    .join('');
  // const markupCountry = `<p>name: ${country[0].name.common}</p>`;
  container.innerHTML = markup;
}

function fetchError(err) {
  console.log(err);
}
