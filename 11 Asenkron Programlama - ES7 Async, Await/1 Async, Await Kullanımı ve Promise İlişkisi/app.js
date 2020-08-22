//https://javascript.info/  (çalışma kaynağı)



// async function test(data){

//     return new Promise((resolve,reject) => {
//         resolve(data);
//     });
// }

// test("merhaba").then(response => console.log(response));




// ! ************ikinci fonksiyon daha hızlı çalışıyor ve yazımı daha kolay************

//async
// async function test2(data){
    //async anahtar kelimesi Promise yapısı dönüyor (return new Promise yapısı)
//     return data;
// }

// console.log(test2("Merhaba"));





//! await

// async function test3(){

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve("Değer");
//         },3000);
//     });

    //await, bir promise yapısının resolve sonucunu bekler, alt satıra geçmez. (async olmayan fonksiyonların dışında çalışmaz!)

//     let response = await promise;   //5sn bekleyecek
//     console.log(response);
//     console.log('Burası, response("Değer") sonrası');

    //return yapılırsa, fonksiyonu çağrısı yapılırken  then kullanılmalı

// }

// test3();








// async function testData(data){

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("String değer giriniz"));
//             }


//         },3000);
//     });


//     const response = await promise;     //resolve olana kadar alt satırlara geçmeyecek
//     return response;


// }


// testData("Battlefield")
// .then(data => console.log(data))
// .catch(err => console.log(err))




//!ASYNC, AWAIT, FETCH


async function getCurrency(url){
    const response = await fetch(url);      //response, resolve olduktan sonra response objemize eşit oluyor

    const data = await response.json();     //json objesine eşitlendi

    console.log(data);



}

getCurrency("https://api.exchangeratesapi.io/latest")


