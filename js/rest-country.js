const loadAllCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayAllCountry(data))
}

const displayAllCountry = (allCountry) => {
    const country = allCountry.map(country => getCountryHTML(country))

    document.getElementById("country").innerHTML = country.join(' ');
}
const getCountryHTML = ({ name, flags }) => {
    return `
        <div class="col bg-light m-3 p-3 border rounded">
            <h3> Name : ${name.common}</h3>
            <img class="col py-1" src="${flags.png}">
        </div>
    `
}

loadAllCountry();