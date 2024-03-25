
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-Select")
const currencySelect1 = document.querySelector("#currency-Select1")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valorConverter = document.querySelector(".valor-converter1")
    const valorConvertido = document.querySelector(".valor-convertido")


const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BRL-USD").then(response => response.json())
const dolarToday = data.USDBRL.high
const euroToday =data.EURBRL.high
const bitcoinToday = data.BTCBRL.high
const libraToday = data.GBPBRL.high
const realToday = data.BRLUSD.high

console.log(data)
    if (currencySelect1.value == "Rea" && currencySelect.value == "Real") {
        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue / realToday)

    }


    if (currencySelect1.value == "Rea" && currencySelect.value == "Euro") {
        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect1.value == "Rea" && currencySelect.value == "Dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'Brl'
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect1.value == "Rea" && currencySelect.value == "Libra") {
        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect1.value == "Rea" && currencySelect.value == "Bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'XBT'
        }).format(inputCurrencyValue / bitcoinToday)
    }


    if (currencySelect1.value == "Dola" && currencySelect.value == "Dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelect1.value == "Dola" && currencySelect.value == "Euro") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }

    if (currencySelect1.value == "Dola" && currencySelect.value == "Real") {
        valorConverter.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue * realToday / dolarToday)

    }

    if (currencySelect1.value == "Dola" && currencySelect.value == "Libra") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolarToday / libraToday)
    }

    if (currencySelect1.value == "Dola" && currencySelect.value == "Bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue * dolarToday / bitcoinToday)
    }


    if (currencySelect1.value == "Eur" && currencySelect.value == "Euro") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }



    if (currencySelect1.value == "Eur" && currencySelect.value == "Dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }

    if (currencySelect1.value == "Eur" && currencySelect.value == "Libra") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }



    if (currencySelect1.value == "Eur" && currencySelect.value == "Real") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday / euroToday)

    }

    if (currencySelect1.value == "Eur" && currencySelect.value == "Bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue * euroToday / bitcoinToday)
    }

    if (currencySelect1.value == "Libr" && currencySelect.value == "Libra") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }

    if (currencySelect1.value == "Libr" && currencySelect.value == "Dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday / dolarToday)
    }

    if (currencySelect1.value == "Libr" && currencySelect.value == "Real") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday / libraToday)

    }

    if (currencySelect1.value == "Libr" && currencySelect.value == "Euro") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * libraToday / euroToday)
    }

    if (currencySelect1.value == "Libr" && currencySelect.value == "Bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue * libraToday / bitcoinToday)
    }






    if (currencySelect1.value == "Bitcoi" && currencySelect.value == "Bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)

    }

    if (currencySelect1.value == "Bitcoi" && currencySelect.value == "Dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * bitcoinToday / dolarToday)
    }

    if (currencySelect1.value == "Biticoi" && currencySelect.value == "Real") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday / bitcoinToday)

    }

    if (currencySelect1.value == "Bitcoi" && currencySelect.value == "Euro") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * bitcoinToday / euroToday)
    }

    if (currencySelect1.value == "Bitcoi" && currencySelect.value == "Libra") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * bitcoinToday / dolarToday)
    }
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyName1 = document.querySelector("#currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")

    if (currencySelect1.value == "Dola" && currencySelect.value == "Dolar") {
        currencyName1.innerHTML = "Dólar Americano"
        currencyImage1.src = "./assets/dolar 1.png",
            currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar 1.png"

    }

    if (currencySelect1.value == "Eur") {
        currencyName1.innerHTML = "EURO"
        currencyImage1.src = "./assets/euro 1.png"
    }

    if (currencySelect1.value == "Rea") {
        currencyName1.innerHTML = "REAL"
        currencyImage1.src = "./assets/real 2.png"
    }

    if (currencySelect1.value == "Libr") {
        currencyName1.innerHTML = "LIBRA"
        currencyImage1.src = "./assets/libra 1.png"
    }

    if (currencySelect1.value == "Bitcoi") {
        currencyName1.innerHTML = "LIBRA"
        currencyImage1.src = "./assets/bitcoin 1.png"
    }



    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "EURO"
        currencyImage.src = "./assets/euro 1.png"
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "REAL"
        currencyImage.src = "./assets/real 2.png"
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = " LIBRA"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = " LIBRA"
        currencyImage.src = "./assets/bitcoin 1.png"
    }


    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect1.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)





















