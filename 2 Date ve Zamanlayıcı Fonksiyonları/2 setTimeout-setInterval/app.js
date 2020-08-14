//setTimeout    (belirli bir süre sonra başlatıyor ve sadece bir kere çalışıyor)
//setInterval (belirlenen süre aralığında sürekli çalışıyor)
//clearInterval (verilen zamanlayıcı fonksiyonu duruyor)

setTimeout(function(){

    console.log("2 saniye sonra gelen selam");

},2000)



stopButton = document.querySelector("#durdur");

stopButton.addEventListener("click",fDur);



let saniye = 0;
let timer = setInterval(function(){
    saniye++;
    console.log(saniye + " Saniye Geçti")

},1000)

function fDur(){
    console.log("Zamanlayıcı devre dışı");
    clearInterval(timer);
}





// console.log();