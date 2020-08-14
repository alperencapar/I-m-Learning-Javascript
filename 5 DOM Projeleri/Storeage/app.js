                //Session Storage

//butonları seç

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");


//inputları seç

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);

}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
    
}

function clearItems(e){
    sessionStorage.clear();
    
}




                //Local Storage

localStorage.setItem("hareket", "burpee");//getItem, 



const todos = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("todos", JSON.stringify(todos));   //Array yazma 

const value = JSON.parse(localStorage.getItem("todos"));    //Array alma
console.log(value);