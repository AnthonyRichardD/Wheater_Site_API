const form = document.querySelector(".form");
const input = document.querySelector("#input_pesquisa");
const pais = document.querySelector(".pais");
const estado= document.querySelector(".estado");
const cidade = document.querySelector(".cidade");
const icon = document.querySelector(".clima-icon");
const temperatura = document.querySelector(".temperatura");
const condicao = document.querySelector(".condicao");


let pesquisa = "";
async function cidadeFetch(nome){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7612fd6b61b34b13b9212513231502&q=${nome.toLowerCase()}&aqi=no&lang=pt`)
    if(response.status === 200){
        const cidade = await response.json()
        pesquisa = await cidade
        alterarPesquisa()
    }
    else{
        console.log("não encontrado")
    }

};
cidadeFetch("recife");
function alterarPesquisa(){
    estado.innerHTML = pesquisa.location.region
    cidade.innerHTML = pesquisa.location.name
    pais.innerHTML = pesquisa.location.country
    icon.src = pesquisa.current.condition.icon
    temperatura.innerHTML = pesquisa.current.temp_c + " °C"
    input.value = ""
    console.log(pesquisa.current.conditions)
    condicao.innerHTML = pesquisa.current.condition.text
};

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    cidadeFetch(input.value)
});