//http status
//200 : OK
//403 : Forbidden
//404 : Not Found
//505 : Internet Server Error
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


document.querySelector("#btn").addEventListener("click",function(){

    //XMLHttpRequest

    const xhr = new XMLHttpRequest();
    // console.log(xhr);


    // xhr.onreadystatechange = function(){
        // console.log(this.readyState);
        // console.log(this.status);


        // if(this.status == 200 && this.readyState == 4){
        //     console.log(this.responseText);
        //  }

        xhr.onload = function(){        //ready state 4 olduğunda çalışır
            // console.log(this.readyState);
            if(this.status === 200){
                // console.log(this.responseText);
                document.querySelector('.ajax').textContent = this.responseText;


            }
        }


        // xhr.onprogress = function(){        //ready state 3 olduğunda çalışıyor
        //     console.log("process işleniyor",this.readyState);
        // }




    xhr.open("GET","example.txt",true);     //("bağlantı çeşiti","bağlanılacak dosya",asenkron işlem mi)
    xhr.send();
    


});