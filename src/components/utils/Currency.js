import axios from 'axios';
async function convertFetch(base,destination){
    const result= await fetch(
       `https://api.exchangeratesapi.io/latest?base=${base}`);

    if(!result.ok){
        throw new Error(`request failed with status code ${result.status}`)
    }
    const data=await result.json();
    return data.rates[destination];
}

async function covertAxios(base,destination){
    const result=await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`);
    return result.data.rates[destination];
}

export { covertAxios as convert};