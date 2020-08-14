const form = document.querySelector("#todo-form");  //komple formu seçiyoruz
const todoInput = document.querySelector("#todo");  //input'u seçiyoruz
const todoList = document.querySelector(".list-group"); //ul kısmını seçiyoruz(sonradan ekleme yapmak için)
const firstCardBody = document.querySelectorAll(".card-body")[0];   // todo listi tutan card bodyleri seçiyoruz
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");   //Todo arama yerini seçiyoruz
const clearButton = document.querySelector("#clear-todos"); //Temizleme butonu 


eventListeners();

function eventListeners(){  //Tüm eventler
    form.addEventListener("submit", addToDo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)=== -1){
            //none found
            listItem.setAttribute("style", "display: none !important");
        }else{
            listItem.setAttribute("style", "dipslay: block !important");
        }
    });
}


function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove(); //üst elemente 2 kere erişiildi ve silindi
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if (todo === deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addToDoToUI(todo);
    });
}


function addToDo(e){

    const newTodo = todoInput.value.trim();    //input'un içindeki değeri alma  


    if(newTodo ===""){

        showAlert("danger", "Lütfen Todo girin");
    }else{

        addToDoToUI(newTodo);
        addTodoToStorage(newTodo);
        
    }
    
    e.preventDefault();
    
}


function getTodosFromStorage(){

    let todos;

    if(localStorage.getItem("todos") === null){
        todos =[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


function showAlert(type,message){

    const alert = document.createElement("div");
    alert.className =`alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    setTimeout(function(){

        alert.remove();

    },2000);
}


function addToDoToUI(newTodo){  //string değerini list item olarak ekleme


    const listItem = document.createElement("li");  //Yeni element oluşturuldu(li elementi)
    const link = document.createElement("a");   //a elementi oluşturuluyor

    //a elementini oluşturma
    link.href ="#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    //li elementini oluşturma
    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node
    listItem.appendChild(document.createTextNode(newTodo)); //input'a girilen değeri veriyoruz

    listItem.appendChild(link); //oluşturulan li elementine a elementi ekleniyor


    //Todo list'e Li ekleme
    todoList.appendChild(listItem); //ul kısmına li ekleniyor
    todoInput.value="";
}



