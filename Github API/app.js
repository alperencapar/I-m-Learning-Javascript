//Element Seçimi
const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users")

const github = new Github();
const ui = new UI();

eventListeners();
function eventListeners() {
    githubForm.addEventListener("submit",getData);                  //arama yapma
    clearUsers.addEventListener("click",clearAllUsers);             //hepsini sil butonu
    document.addEventListener("DOMContentLoaded",getAllSearched);   //Sayfa yüklenince Storage'daki bilgileri ekleme
}


function getData(e){

    let username = nameInput.value.trim();

    if(username === ""){
        console.log("Kullanıcı adı boş olamaz");
    }
    else{
        
        github.getGithubData(username)
        .then(response => {
            if(response.user.message ==="Not Found"){
                //error
                ui.showError("Kullanıcı bulunamadı")
            }
            else{
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user)
                ui.showRepoInfo(response.repo);
            }
            
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput();
    e.preventDefault();
}


function clearAllUsers(){
    Storage.clearAllSearchedUsersFromStorage();
    ui.clearAllSearchedFormUI();
}


function getAllSearched(){
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li> `
        
    });
    lastUsers.innerHTML = result;
}