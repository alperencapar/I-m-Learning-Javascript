const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const listGroup = document.querySelector(".list-group");

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addToDo);
}

function addToDo(e){

    const newTodo = todoInput.value; 

    addToDoToUI(newTodo);
    e.preventDefault();
}

function addToDoToUI(newTodo){


    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");
    linkItem.href = "#";
    linkItem.className = "delete-item";
    linkItem.innerHTML =' <i class = "fa fa-remove"></i>';



    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(linkItem);

    listGroup.appendChild(listItem);
    todoInput.value="";

}