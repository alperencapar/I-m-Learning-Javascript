// const filterInput = document.getElementById("filter");

/*
 filterInput.onfocus = function(){
    console.log("gotcha");
} */


/* let filterInput;
filterInput = document.getElementById("filter");


 filterInput.addEventListener("focus", function(e){

    console.log("focused");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    e.target.placeholder = "nabers";

});  */



/* 
 const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitform);

function submitform(e){

    console.log("Submitted");


    e.preventDefault(); //formun gönderilmesini engelliyor

} */










            //klavye eventleri
/* document.addEventListener("keydown", run); //keypress, keypress, keydown

function run(e){
    console.log(e.key);
}

            //dinamik olarak girilen değeri sayfada kullanmak
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e){

    console.log(e.target.value);

    header.textContent = e.target.value;    //başlığa value değerindeki yazıları ekliyor

} */









            //mouse eventleri

/* const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("click", run)    // mouseover, dblclick, mouseup, mousedown, mouseout, mouseenter(mover ile farkı çok elemanlı yerlerde daha kullanışlı), mouseleave


function run(e){
    console.log(e.type);
}
 */








            //Input Eventleri

/* const filter = document.getElementById("filter");
 */
/* document.addEventListener("DOMContentLoaded", load);    //Sayfa tamamen yüklenince oluşan event

function load(e){
    console.log("Sayfa yüklendi");

} */

        //Focus

/* filter.addEventListener("focus", run);  //blur(odaktan çıkınca(focus) oluşur)

function run(e){
    console.log(e.type);
}

filter.addEventListener("paste", run);  //Yapıştırma işlemi yapılınca tetikleniyor

filter.addEventListener("copy", run);   //kopyalama işlemi yapılınca tetiklenir

filter.addEventListener("cut", run);    //kesme işlemi yapılınca tetiklenir

filter.addEventListener("select", run); //seçme işlemi yapılınca tetiklenir */










            //Event Capturing ve Bubbling 
/* document.querySelectorAll(".card-body")[1].addEventListener("click", run1);

function run1(e){
    // console.log(e.target);

    if(e.target.className == "fa fa-remove"){
        console.log("Silme işlemi");
    }
    if(e.target.id == "filter"){
        console.log("Filtreleme işlemi");
    }
}
 */


 