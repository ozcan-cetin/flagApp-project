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
  
flagApp()