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