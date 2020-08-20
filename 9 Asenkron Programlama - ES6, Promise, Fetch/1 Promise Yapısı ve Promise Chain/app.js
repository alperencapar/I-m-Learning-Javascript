// function getData(data){//promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         //olumlu veri rosolve, olumsuz veri reject ile geri dönüyor

//         setTimeout(function(){
//             resolve("Olumlu sonuç");
//         },5000);

//     });



// }


// function getNegData(data){//promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         //olumlu veri rosolve, olumsuz veri reject ile geri dönüyor

//         setTimeout(function(){
//             reject("Olumsuz sonuç");
//         },5000);

//     });



// }



// console.log(getData("Merhaba"));  //5sn bekleyip bakınca, olumlu sonuç dönüyor(resolved)

// console.log(getNegData("Merhaba")); // catch yapısı kullanmadığımız için hata döndü


// getData("Merhaba").then(function(response){
//     console.log(response);

// });



// getNegData("Merhaba").catch(function(err){
//     console.log(err);
// })





















// then ve catch'i birleşik yazma


function getData(data){//promise objesi döndüren fonksiyon
    return new Promise(function(resolve,reject){
        //olumlu veri rosolve, olumsuz veri reject ile geri dönüyor

        setTimeout(function(){


            if(typeof data === "string" ){
                resolve("Olumlu");
            }
            else{
                reject(new Error("Lütfen String değer girin"));
            }
            

        },2000);


    });



}

// getData("Merhaba").then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.log(err);
// });


// getData(22).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.log("|********************************|");
//     console.log(err);   
//     console.log("|********************************|");
// });


//arrow function

// getData("Mrb").then(response => {
//     console.log(response);

// }).catch( err => {
//     console.log(err);
// });














function addTwo(number){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number + 2);
            }
            else{
                reject(new Error("Lütfen sayı giriniz"))
            }
        },2500);
    });
}




//PROMISE CHAIN

addTwo(10)
.then(response =>{
    console.log(response);
    return response + 2;        //then fonksiyonun içinde yaptığımız için promise yapısı olarak geliyor
}).then(response2 =>{
    console.log(response2);
}).catch(err => console.log(err));
//catch yapısı yalnız bir kere kullanılabilir. Herhangi bir yerde hata olduğunda, yer fark etmeksizin catch yapısı çalıştırılıyor

