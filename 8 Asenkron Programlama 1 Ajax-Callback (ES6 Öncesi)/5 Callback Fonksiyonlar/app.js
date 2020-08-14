                //Callback fonksiyonlar
//Callback fonksiyonlar içerisine bir adet fonksiyon alır. Ana fonksiyon ve içerisine verdiğimiz fonksiyon sıralı şekilde çalışır. Çalışma sırası yazma sırasına göre değişir!

/* 
const langs = ["Python","Java","C"];

langs.forEach(function(lang){
    console.log(lang);
});
 */

/* 
document.getElementById("btn").addEventListener("click",function(){
    console.log("TIKLA")
});
 */


    //ASENKRON İŞLEMLER
/* 
function process1(){
    setTimeout(function(){
        console.log("Process 1");
    },3000);
    
}


function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },2000);
    
}


process1();
process2();

console.log("Naber");   //fonksiyonları beklemeden, çalışıyor
//İşlemler birbirlerini beklemiyorlar

 */



                //CALLBACK!
/* 
function process1(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback();
    },3000);
    
}


function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },2000);
    
}


process1(process2());           //ilk başta process1, daha sonra process2 çalıştı

 */






//

/* 
const langs = ["Python","Java","C"];

function addLang(lang){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("Javascript");

getAllLangs();

//addLang çalışmadan getAllLangs çalıştı. Böylece eklediğimiz string'i ekrana bastıramadık

 */


//Callback ile 
const langs = ["Python","Java","C"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}


addLang("Javascript",getAllLangs);




















