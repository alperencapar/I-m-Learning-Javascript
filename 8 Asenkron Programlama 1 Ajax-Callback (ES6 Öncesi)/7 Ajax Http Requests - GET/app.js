//https://jsonplaceholder.typicode.com/
//https://jsonplaceholder.typicode.com/guide.html


//Ajax,callback,http requests


class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //Get Request

    get(url,callback){
        this.xhr.open("GET",url);       //bağlantı açıldı
        // console.log(this);  //this anahtar kelimesi xhr'ı gösterdiği için xhr.xhr yapmış oluyoruz, bu yüzden fonksiyon HATA veriyor 



        // HATA VEREN ORJ FONKSİYON!
        // this.xhr.onload = function(){
        //     if(this.xhr.status === 200){
        //         console.log(this.xhr.responseText);
        //     }
        // } 
        


        //Bu hatayı çözmenin birçok yolu var


        //ÇÖZÜM 1   - tavsiye edilmez

                // const temp = this;

                // xhr.onload = function(){
                //     if(xhr.status === 200){
                //         console.log(xhr.responseText);
                //     }
                // } 
                



        //ÇÖZÜM 2   - ilkel yol
                 
                // const temp = this;      //Request objesini aldık

                // temp.xhr.onload = function(){
                //     if(temp.xhr.status === 200){
                //         console.log(temp.xhr.responseText);
                //     }
                // } 
                


        //ÇÖZÜM 3   - bind ile Request sınıfına bağlama
                
                // this.xhr.onload = function(){
                // if (this.xhr.status === 200){
                //     console.log(this.xhr.responseText);
                //     }
                // }.bind(this)
                


        //ÇÖZÜM 4   - arrow function bind işlemini otomatik yapıyor

                // this.xhr.onload = () =>{
                // if (this.xhr.status === 200){
                //     console.log(this.xhr.responseText);
                //     }
                // }




        //ÇÖZÜM 5   - tercih edilen

        this.xhr.onload = function(){
            if (this.status === 200){
                // console.log(this.responseText);
                callback(null,this.responseText);    //değeri fonksiyona gönderiyoruz
            }
            else{
                callback("Hata oluştu",null);
            }
        }



        this.xhr.send();

    }

}

const request = new Request();

// const albums = request.get("https://jsonplaceholder.typicode.com/albums");

// console.log(albums);        //asenkron işlem olduğu için albümleri alamadık. O yüzden get işlemine callback işlemi uyguluyoruz


request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    //response değeri, bize geri dönen albüm string'lerine eşit olacak
    if(err === null){
        //başarılı
        console.log(response);
    }
    else{
        //hata
        console.log(err);
    }
});




        //ID'si 51 olan albümü alıyoruz (deneme)
// request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
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






