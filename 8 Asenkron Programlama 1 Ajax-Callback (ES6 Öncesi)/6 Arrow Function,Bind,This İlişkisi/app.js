/* 
const person = {

    age:25,
    tellAge: function(){
        //this - person'u gösteriyor
        //person'dan türetilmiş obje
        console.log(this.age);
        console.log(this);

    }
}


person.tellAge();

console.log("Bind sonrası >\n\n\n");


const person2 = {

    age:25,
    tellAge: function(){
        //this - person'u gösteriyor
        //person'dan türetilmiş obje
        console.log(this.age);
        console.log(this);

    }.bind(this)
    //this - window

}

person2.tellAge();
 */

    //arrow fonksiyon, bind ile bağlanmış gibi davranıyor
const person3 = {
    age:26,

    tellAge: () => {
        console.log(this);
        console.log(this.age);
        // console.log(person3.age);
    }
}

person3.tellAge();
