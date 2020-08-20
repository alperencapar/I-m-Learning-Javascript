class Request{

    get(url){

        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        })
        
    }

    post(url,data){

        return new Promise( (resolve,reject) =>{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
          })
          .then(response => response.json())
          .then(data => resolve(data))  //çağırdığımız yere gönderme
          .catch(err => reject(err));

        });
        
    }

    put(url,data){
        return new Promise( (resolve,reject) => {

            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
     
    }

    delete(url){

        return new Promise( (resolve,reject) => {
            fetch(url, {
                method: 'DELETE'
            }).then(response => resolve("Veri Silme Başarılı"))
            .catch(err => reject(err));
        })

    }

}


const request = new Request();


    //GET REQUEST

// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {console.log(albums)})
// .catch(err => console.log(err));




    //POST REQUEST

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"thrillerX1Bfg4"})
// .then(newAlbum => console.log(newAlbum))        //çağırdığımız yerde yazdırıyoruz (resolve ve reject bu işe yarıyor)
// .catch(err => console.log(err));




    //PUT REQUEST

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:1, title:"Gözlerim Görmeden"})
// .then(album => console.log(album))
// .catch(err => console.log(err));
    
    
    

        //DELETE REQUEST
    
// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message => console.log(message))
// .catch( err => console.log(err));
    