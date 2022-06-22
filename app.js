const flagApp = async (name)=>{
    const url = `https://restcountries.com/v3.1/name/${name}`;

    try {
        const res = await fetch(url);
    } catch (error) {
        console.log(error);
    }