
 //constructor'ın Büyük harf ile başlaması önemli!
 function Employee(name,age){ //this objeyi referans gösteriyor
     this.name = name;
     this.age = age;
     console.log(this);     //Objenin kendisini gösteriyor

     /* 
     this.showInfos = function(){   //Böyle metot tanımlaması yapmak doğru değil. Fazladan bellek kullanımı gerçekleşiyor 
                                    //Prototype'a tanımlamak daha mantıklı
         console.log(this.name,this.age);
     }
      */

 }

//Prototype'a metot yazmak
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}




//  const emp1 = new Employee("Ada",21);
//  const emp2 = new Employee("Ece",21);


//  emp1.showInfos();
//  emp2.showInfos()
//  console.log(emp1)
//  console.log(emp2)



                        //JAVSCRIPT'TE CLASS YOK!!!! Prototype var. Prototype kendi içerisinde bir objedir
                        //JS'de her objede proto bulunur! 
                        //Prototype'ın içinde ise en temel obje bulunur
                        //Prototype objeler arasında kalıtım (inheritance) yapmamızı sağlıyor 
                        
const emp3 = new Employee("Gaben",55);

// console.log(emp3.toString());       //object Object
//toString fonksiyonu/metodu yazmamamıza rağmen protonun üstündeki en temel objede böyle bir fonksiyon olduğu için değer dönderdi

emp3.showInfos();





