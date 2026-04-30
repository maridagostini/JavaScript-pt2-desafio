// click do botão
const convertButton = document.querySelector(".btn-converter")
// converter de qual moeda
const selectFrom = document.querySelector(".select-from")
// converter para qual moeda
const selectTo = document.querySelector(".select-to")
// valor digitado para converter
const inputCurrency = document.querySelector(".input-currency")
// lbl converter de
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
// lbl converter para
const currencyValueConverted = document.querySelector(".currency-value")

async function convertValues(){

    const moedaOrigem = selectFrom.value
    const moedaDestino = selectTo.value

    if (moedaOrigem != moedaDestino){
        // 1. Busca a cotação atual na API
        const url = `https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`;

        const response = await fetch(url);
        const data = await response.json();

        const chave = `${moedaOrigem}${moedaDestino}`;
        const cotacao = data[chave].bid;

        // 2. Realiza o cálculo
        const valorConvertido = inputCurrency.value * cotacao;

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: moedaOrigem
        }).format(inputCurrency.value)

        // 3. Formata o valor
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: moedaDestino
        }).format(valorConvertido)
    }
    else
    {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: moedaOrigem
        }).format(inputCurrency.value)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: moedaDestino
        }).format(inputCurrency.value)
    }
}

convertButton.addEventListener("click", convertValues)

function changeSelectFrom(){
    // bandeira converter para
    const imgOrigem = document.querySelector(".img-convert-from")
    // label converter para
    const lblOrigem = document.querySelector(".currency-to-convert")

    if (selectFrom.value == "USD"){
        imgOrigem.src="./assets/dolar.png"
        lblOrigem.innerHTML = "Dólar"
    }
    else if (selectFrom.value == "EUR"){
        imgOrigem.src="./assets/euro.png"
        lblOrigem.innerHTML = "Euro"
    }
    else if (selectFrom.value == "GBP"){
        imgOrigem.src="./assets/libra.png"
        lblOrigem.innerHTML = "Libra"
    }
    else if (selectFrom.value == "BTC"){
        imgOrigem.src="./assets/bitcoin.png"
        lblOrigem.innerHTML = "Bitcoin"
    }
    else if (selectFrom.value == "BRL"){
        imgOrigem.src="./assets/real.png"
        lblOrigem.innerHTML = "Real"
    }

    convertValues()
}

selectFrom.addEventListener("change", changeSelectFrom)

function changeSelectTo(){
    // bandeira converter para
    const imgDestino = document.querySelector(".img-conveted")
    // label converter para
    const lblDestino = document.querySelector(".currency")

    if (selectTo.value == "USD"){
        imgDestino.src="./assets/dolar.png"
        lblDestino.innerHTML = "Dólar"
    }
    else if (selectTo.value == "EUR"){
        imgDestino.src="./assets/euro.png"
        lblDestino.innerHTML = "Euro"
    }
    else if (selectTo.value == "GBP"){
        imgDestino.src="./assets/libra.png"
        lblDestino.innerHTML = "Libra"
    }
    else if (selectTo.value == "BTC"){
        imgDestino.src="./assets/bitcoin.png"
        lblDestino.innerHTML = "Bitcoin"
    }
    else if (selectTo.value == "BRL"){
        imgDestino.src="./assets/real.png"
        lblDestino.innerHTML = "Real"
    }

    convertValues()
}

selectTo.addEventListener("change", changeSelectTo)

