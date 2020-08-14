 let value;

/*
value = document.links[0].classList;
value = document.forms;
value = document.forms["form"]; */

// console.log(value);















        //Element Id ile seçim

 /* element = document.getElementById("todo-form"); */


        //Class'a göre seçim

/*  element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header"); */



        //Element Tag'e göre seçim

 /* element = document.getElementsByTagName("li"); */ //sayfadaki bütün li'ler


        //Query Selector -tek element - all 

 /* element = document.querySelector("#todo-form");
element = document.querySelectorAll(".list-group-item"); */


/*
element.forEach(function(el){

    console.log(el);
});

console.log(element);
 */















        //Element özellikleri 

// let element = document.querySelector("#clear-todos");
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);















        //Style ve Element Özellikleri

// const element = document.querySelector("#clear-todos");

/* element.className = "btn btn-primary";
element.style.color = "red";
element.style.marginLeft = "12px";
element.href = "#";
element.target = "_blank"; */

/* 
element.textContent = "Sil";
element.innerHTML = "<span>Silin</span>";

 */















        //Birden fazla elemanı seçip özelliklerini değiştirme


/* const elements = document.querySelectorAll(".list-group-item");
console.log(elements); */

/* elements.forEach(function(el){

    el.style.color = "red";
    el.style.background ="#eee";

}); */


/* let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)"); */

// let element2 = document.querySelector(".list-group");

//  console.log(element2);















        //DOM içerisinde gezinme

 /* value = element2.children;
 value = element2.childElementCount;
 value = element2.children[2].textContent = "Dinamik olarak değişti";
 value = element2.children[element2.children.length -1];
 value = element2.previousElementSibling;
 value = element2.nextElementSibling;
 value = element2.parentElement;



console.log(value); */















        //Dinamik Yeni Element Oluşturma


/* const newLink = document.createElement("a");    //element oluşturma

const cardbody = document.getElementsByClassName("card-body")[1];


newLink.id = "clear-todos"; //id değeri
newLink.className ="btn btn-danger";    //class değeri
newLink.href ="google.com";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink);

console.log(cardbody);

console.log(newLink);
 */













        //Dinamik Element Silme


/* const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


        //Remove Metodu

 todos[0].remove();


//Remove Child

todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[0]);


console.log(todos);
console.log(todoList); */













        //Element Değiştirme
        //Replace

/* const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");    //Yeni element oluşturuluyor

newElement.className = "card-title";     //Yeni element özellikleri
newElement.id = "tasks-title";           //Yeni element özellikleri
newElement.textContent = "Yeni Todolar"; //Yeni element özellikleri

//Eski Element
const oldElement = document.querySelector("#tasks-title");//eski element seçiliyor

cardbody.replaceChild(newElement, oldElement);

console.log(newElement);
console.log(cardbody); */












        //Dinamik Attribute Değiştirme-Silme-Ekleme


/*  
const todoInput = document.getElementById("todo");
let element;

element = todoInput.classList;  //Seçtiğimiz elemanın class'ını seçiyoruz

 todoInput.classList.add("newClass");    //Elemana class ekliyoruz
todoInput.classList.add("newClass2");   //Elemana class ekliyoruz

todoInput.classList.remove("newClass2"); 
element = todoInput;

// element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Nabers"); //Değiştirilecek özelliği seçip değeri giriyoruz

todoInput.setAttribute("title","başlık");

element = todoInput.hasAttribute("name");   //özellik var ise true değeri dönüyor
todoInput.removeAttribute("name");  //Özellik kaldırma

element = todoInput;
console.log(element);  
*/