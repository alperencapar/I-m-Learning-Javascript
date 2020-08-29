//element seçme
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

const currency = new Currency("USD","TRY")
const ui = new UI(firstSelect,secondSelect);
eventListeners();

function eventListeners() {
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.addEventListener("change", function(){
        //currency.js üzerindeki fonksiyonlar üzerinde değişim yapılıyor
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);    //firstSelect üzerindeki bütün seçenekler[firstSelect'deki seçilmiş veri].yazıiçeriği
        ui.changeFirst();
    });

    secondSelect.addEventListener("change", function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    });
}

//girilen miktar değiştikçe tetiklenecek
function exchangeCurrency() {
    currency.changeAmount((amountElement.value));
    currency.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err))
    
}


