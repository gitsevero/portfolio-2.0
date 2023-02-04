
const options = { method: 'GET', headers: { accept: 'application/json' } };
const text = document.getElementsByTagName('h1')

const spanCotacao = document.getElementById('cotacaoSpan')
const moedaentrada = document.getElementById('entradaMoeda');
const input = document.getElementById('buttonMoeda')
const base1 = document.getElementById('saidaMoeda')
const quantia1 = document.getElementById('quantia')
const converted = document.getElementById('converted')
const cotacao = document.getElementById('contacao')
const optionCreate = document.getElementById('saidaMoeda')
const optionCreate2 = document.getElementById('entradaMoeda')
const key = "89487f1e59-4ff9afddff-rpcdco"

const getWeatherData = async (moeda, base, quantia) => {

    const apiWeatherURL = `https://api.fastforex.io/convert?from=${moeda}&to=${base}&amount=${quantia}&api_key=${key}`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const getCoin = async () => {
    const option = `https://api.fastforex.io/currencies?api_key=${key}`
    const res2 = await fetch(option);
    const data1 = await res2.json();
    const data2 = data1.currencies

    let entrie = Object.entries(data2);
    entrie.forEach(e => {
        optionCreate.innerHTML += `<option value="${e[0]}">${e[1]}</option>`
        optionCreate2.innerHTML += `<option value="${e[0]}">${e[1]}</option>`


    });



}

const showWeatherData = async (moeda, base, quantia) => {


    const data = await getWeatherData(moeda, base, quantia);

    if (data.cod === "404") {
        showErrorMessage();
        return;
    }
    const result = data.result;

    console.log(result)


    let entries = Object.entries(result);

    console.log(entries[1][1]);

    cotacao.innerHTML = entries[1][1].toFixed(3) + " " + `${base}`
    converted.innerHTML = entries[0][1];



    cotacao.style.color = 'black'
    converted.style.color = 'black'

    spanCotacao.innerHTML = `cotação do ${moeda}:`



};






input.addEventListener("click", async (e) => {
    e.preventDefault();

    const moeda = moedaentrada.value;
    const base = base1.value;
    const quantia = quantia1.value;


    const no = showWeatherData(moeda, base, quantia)
    console.log(no)

});


