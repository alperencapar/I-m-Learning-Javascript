//Fetch - Veri alma-gönderme
//Fetch, Ajax'e göre kullanımı daha kolay


//Local'deki txt ve json dosyasından veri alma
function getTextFile(){

    fetch("example.txt").then( (response) =>{
        return response.text(); //return yaptığımız için promise olarak geliyor
    })
    .then( data => console.log(data))
    .catch(err => console.log(err));


}
// getTextFile();


function getJsonFile(){

    fetch("example.json").then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

//getJsonFile();




//External API'dan veri alma


function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        
        console.log(data.rates.TRY);
    })
    .catch(err => console.log(err))
}


getExternalAPI();

