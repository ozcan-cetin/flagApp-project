//* ASYNC AWAIT SECTION *//

const flagApp = async (name)=>{
    const url = `https://restcountries.com/v3.1/name/${name}`;

    try {
        const res = await fetch(url);
        if(!res.ok){
            renderError('There is a proplem ${res.status}')
            throw new Error
        }
        const data = await res.json();
        renderCountry(data[0]);
    } catch (error) {
        console.log(error);
    }
};

//* FUNCTIONS *//

const renderError = (err)=>{
    const countries = document.querySelector(".countries");
    countries.innerHTML += `
    <h1>There is a problem ${err}</h1>
    <img src="./img/404.png" alt="">
    `
};

const renderCountry = (country)=>{
console.log(country);
const countries = document.querySelector(".countries");

const {
    capital,
    name: { common },
    region,
    flags: { svg },
    languages,
    currencies,
  } = country;

  countries.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="${svg}" class="card-img-top" alt="...">
      <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <p class="card-text">${region}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${capital}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(currencies)[0].name}, ${Object.values(currencies)[0].symbol}</li>
  </ul>
</div>
    `;
};

//! ***********
const mySelect = document.querySelector(".search")

const chooseCountry = async (name) => {
  
    const url = `https://restcountries.com/v2/all?name=${name}`
    const res = await fetch (url);
    const data = await res.json()
    // console.log(Array.isArray(data));
    // console.log(data[0].name);
    data.forEach(element => {
        // console.log(element.name); 

        const option = document.createElement
        ("option")
        option.innerHTML = element.name
        option.value = element.name;
        mySelect.appendChild(option)
        // console.log(option.value);
      });
      flagApp(mySelect.value)
      console.log(mySelect.value);
  }
  chooseCountry()
  mySelect.addEventListener("change", chooseCountry)