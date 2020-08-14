document.querySelector("#ajax").addEventListener("click",addEmployees);


function addEmployees(){

    
    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json", true);


    xhr.onload = function(){

        let list = document.querySelector("#employees");
        console.log(list)

        if(this.status == 200){
            const employees = JSON.parse(this.responseText)

            employees.forEach(function(employee){
               
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    
                    
                    </tr>
                `
            });
        }
    }
    xhr.send();


}












