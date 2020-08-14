const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");

eventListeners();

function eventListeners(){
    
    form.addEventListener("submit", addToDo);

}

function addToDo(e){

    const newTodoInput = todoInput.value;

    addToDoToUI(newTodoInput);

    e.preventDefault();
}

function addToDoToUI(newTodoInput){

/*<li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>*/

    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");

    linkItem.href = "#";
    linkItem.className = "delete-item";
    linkItem.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between"


    listItem.appendChild(document.createTextNode(newTodoInput));
    listItem.appendChild(linkItem);

    todoList.appendChild(listItem);
    todoInput.value="";

}
 function showAlert(){

    const alert = createElement("div");
    alert.className = "alert alert-danger"
    alert.textContent ="Todo ekleyin!";
    firstCardBody.appendChild(alert);

    setTimeout(function(){

        alert.remove();

    },1500);

 }
