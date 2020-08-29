class Currency{
    //app.js kısmından 2 tane değer gönderilecek(USD-TRY)
    constructor(firsCurrency, secondCurrency) {
        this.firsCurrency = firsCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base="
        this.amount = null; //sürekli değiştiği için null
    }

    async exchange(){
        let response = await fetch(this.url + this.firsCurrency)    //ilk seçilen para birimini url'nin sonuna ekliyoruz
        const data = await response.json()
        const rates = await data.rates;
        
        return rates[this.secondCurrency] * this.amount;;
        
    }



    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }

}