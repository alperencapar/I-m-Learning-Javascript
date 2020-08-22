class Request{

    async get(url){

        const response = await fetch(url);                  //response object ----- fetch'in response değeri dönmesi bekleniyor, alt satırlara geçilmiyor

        const responseText = await response.json();         //json object

        return responseText;    //promise yapısı döndürüyoruz

    }


    async post(url,data){

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });         //response object

        const responseText = await response.json();
        return responseText;

    }


    async put(url,data){

        const putResponse = await fetch(url,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const responseText = await putResponse.json();

        return responseText;

    }


    async delete(url){
        const deleteResponse = await fetch(url,{
            method: "DELETE"
        })

        // const responseText = await deleteResponse.json();
        // return responseText;
        if(deleteResponse.status === 200){
            return "Veri silme başarılı";   //Fonksiyonun başında async kullandığımız için promise yapısı şeklinde dönecek. (delete fonksiyon çağrısı yaptığımız yerde .then ve .catch kullanmamız gerekiyor)
        }
      
        else{
            throw new Error("Bir hata meydana geldi! Hata tipi bilinmiyor");
        }
        

    }


}


const request = new Request();


    //GET REQUEST

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => console.log(albums))
.catch(err => console.log(err));


    //POST REQUEST

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Allame - Gözlerim Görmeden"})
// .then(album => console.log(album))
// .catch(err => console.log(err));


    //PUT REQUEST

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:1,title:"Allame - Gözlerim Görmeden"}) //id:10 olan veriyi güncelledik
// .then(data => console.log(data))
// .catch(err => console.log(err))


    //DELETE REQUEST

// request.delete("https://jsonplaceholder.typicode.com/albums/10")
// .then((result) => console.log(result))
// .catch((err) => console.error(err));