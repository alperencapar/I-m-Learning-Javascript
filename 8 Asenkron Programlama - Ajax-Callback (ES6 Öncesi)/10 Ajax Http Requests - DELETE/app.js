// GET - API'dan bilgi alma

// POST - API'a bilgi gönderme

// PUT - içerik var ise gelen veriler ile değiştirilir , eğer içerik yok ise yeni içerik yaratılır. Server'a dosya bazlı içerikler göndermek için tercih edilir
//https://www.fibiler.com/HTTP-metodlarindan-POST-ile-PUT-Arasindaki-Fark_Veri_12562


class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        this.xhr.open("GET",url);       //bağlantı açıldı

        this.xhr.onload = function(){
            if (this.status === 200){
                callback(null,this.responseText);    //değeri fonksiyona gönderiyoruz
            }
            else{
                callback("Hata oluştu",null);
            }
        }


        this.xhr.send();
    }


    post(url,data,callback){
        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Content-type","application/json")    //API'a göndereceğimiz bilginin tipini belirtmemiz gerekiyor
        //https://www.w3schools.com/js/js_ajax_http_send.asp


        this.xhr.onload = () =>{
            //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
            //arrow funciton this objesini Request'e bağladığı için this.xhr.status kullanıyoruz. Request'ten dönen objenin xhr'ına erişiyoruz
           
            if (this.xhr.status === 201){

                callback(null,this.xhr.responseText);

            }

            else{

                callback("POST REQUEST HATASI!",null);

            }


        }

        this.xhr.send(JSON.stringify(data));
    }


    put(url,data,callback){

        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-type","application/json")    //API'a göndereceğimiz bilginin tipini belirtmemiz gerekiyor

        this.xhr.onload = () =>{
                       
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }

            else{
                callback("PUT REQUEST HATASI!",null);
            }

        }

        this.xhr.send(JSON.stringify(data));
    

    }


    delete(url,callback){
        this.xhr.open("DELETE",url);       

        this.xhr.onload = function(){
            if (this.status === 200){
                callback(null,this.responseText,"Silme işlemi başarılı");
            }
            else{
                callback("DELETE REQUEST HATASI",null);
            }
        }


        this.xhr.send();
    }




}




const request = new Request();




// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     //response değeri, bize geri dönen albüm string'lerine eşit olacak
//     if(err === null){
//         //başarılı
//         console.log(response);
//     }
//     else{
//         //hata
//         console.log(err);
//     }
// });




// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){

// if(err === null){
//     console.log(album)

// }
// else{
//     console.log(err);
// }

// });



// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Ekin Beril Dualite"},function(err,album){

// if(err === null){
//     console.log(album)

// }
// else{
//     console.log(err);
// }

// });



request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response,text){
    //response değeri, bize geri dönen albüm string'lerine eşit olacak
    if(err === null){
        //başarılı
        console.log(response,text);
        //işlem gerçekleştiği için boş obje dönderdi
    }
    else{
        //hata
        console.log(err);
    }
});

