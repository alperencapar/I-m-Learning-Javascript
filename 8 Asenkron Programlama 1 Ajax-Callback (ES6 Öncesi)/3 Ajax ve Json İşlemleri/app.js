document.getElementById("ajax").addEventListener("click",getAllEmployees);


function getAllEmployees(){
    const xhr = new XMLHttpRequest();   //obje oluşturuldu


    xhr.open("GET","employees.json",true);      //bağlantı kuruldu

    xhr.onload = function(){    

        let list = document.getElementById("employees");    //tbody'deki employees
        
        if(this.status == 200){
            const employees = JSON.parse(this.responseText)
            employees.forEach(function(employee){

                list.innerHTML +=`
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