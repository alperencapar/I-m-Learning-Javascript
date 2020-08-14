const amountInput = document.querySelector("#amount")
const changeButton = document.querySelector("#change");
const tlInput = document.querySelector("#tl");

changeButton.addEventListener("click",convertCurrency);

function convertCurrency(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);

            // console.log(response);
            // console.log(response.rates);

            const rate = response.rates.TRY

            const amount = Number(amountInput.value);

            tlInput.value = (amount * rate) + "₺";

        }
    }

    xhr.send();
}