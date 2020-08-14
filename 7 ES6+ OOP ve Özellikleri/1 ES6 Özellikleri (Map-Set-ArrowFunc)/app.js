                                        //ES6+ Arrow Function

// Standart yazım

// const merhaba = function(){
//     console.log("merhaba *mcık");
// }

// merhaba();


            //ES6+

// const merhaba = () => {
//     console.log("merhaba");
// }
// merhaba();
 

 
// const merhaba = (firstName) => {
//     console.log("merhaba", firstName);
// }

// merhaba("Ben");

// const cube = x => x * x * x;

// console.log(cube(4));
 


                                            //Destructing


    // Standart yazım

// let number1, number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];
// console.log(number1,number2);


//ES6+

// [number1,number2] = arr;
// console.log(number1,number2);




//Obje destructing




// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// };

// const {number1,number2,number3} = numbers;  //objenin içerisindeki değişkenler ile eşleşmeli

// console.log(number1,number2,number3);

// const {a,c,e} = numbers;

// console.log(a,c,e);

// const {a:number1, c:number2, e:number3} = numbers;  //bu şekilde de kullanılabilir
// console.log(number1,number2,number3);


                                            //function Destructing

// const getLangs = () => ["Python", "Java", "C"];

// const [lang1,lang2,lang3] = getLangs();

// console.log(lang1,lang2,lang3);


                                        //Spread Operator

/* 
const langs= ["Python","C++","Php","Java","VB.Net"];
console.log(langs[0],langs[1],langs[2]);

console.log(...langs);                      //spread operatörü sayesinde tekrar tekrar yazmamız gerekmiyor

langs2 = ["Javascript",langs[0],langs[1],langs[2]];  

langs2 = ["Javascript",...langs];

console.log(langs2);


 */

    //Hepsini eşitleme 
/* const numbers = [1,2,3,4,5,6,7,8,9,10,11];

const [a,b,...numbers2] = numbers;
console.log(a,b);
console.log(numbers2);

const addNumbers = (a,b,c) => {
    console.log(a+b+c);
}

addNumbers(...numbers); //index değeri vermek yerine spread operatörü kullanılabilir

 */


                                        //For In ve For Of döngüleri

/* 
const langs = ["Python","Java","C","Js"];

const name = "Alperen"

//Standart For döngüsü
for(let i=0; i<= langs.length -1; i++){
    console.log(langs[i]);
}console.log("\n \n");


//array - for in 

for(let index in langs){
    console.log(index,langs[index]);
}console.log("\n \n");

//string - for in 

for (let index in name){
    console.log(index, name[index]);
}console.log("\n \n");


//for of döngüsü ile obje üzerinde gezilemez

for (let value of langs){
    console.log(value);
}console.log("\n \n");
 */





                                        //Maps

//Maps =====> Key-Value

/* 
let map = new Map(); //oluşturma
// console.log(map);

const key1 ="Alp";
const key2 = {a:10, b:20};
const key3 = () => 2;



//set
map.set(key1, "StringG");
map.set(key2, "Object Literall");
map.set(key3,"Functionnğü");



//get
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));


//Boyut
console.log(map.size);
 */

/* 
 const cities = new Map();

 cities.set("Ankara",5);
 cities.set("Gaziantep",27);
 cities.set("Adana",1);




cities.forEach(function(value,key){

    console.log(key,value);


});

for(let [key,value] of cities){
    console.log(key,value);
}



for(let key of cities.keys()){
    console.log(key);
}
 */

//Array'den map oluşturma
/* 
const array = [ ["key1","value1"],["key2","value2"] ];

const lastMap = new Map(array);

console.log(lastMap);



//Map'tan array oluşturma

const cities = new Map()
cities.set("Ankara",5);
cities.set("Gaziantep",27);
cities.set("Adana",1);

const arrays = Array.from(cities);
console.log(arrays);
 */

                                //Referans Tipleri

//Primitive ile Complex Data tipleri arasında değer karşılaştırma yapılamaz

//Primitive Data Types

    /*
        string
        number
        boolean
        undefined
    */

//Complex Data Types:

    /*
        typeof {name:'John', age:34} // Returns "object"
        typeof [1,2,3,4]             // Returns "object" (not "array", because in JavaScript arrays are objects.)
        typeof null                  // Returns "object"
        typeof function myFunc(){}   // Returns "function"
    */

    /* 
    var primeNumbers1 = [2, 3, 5, 7, 13, 17];
    var primeNumbers2 = [2, 3, 5, 7, 13, 17];
    console.log(primeNumbers1 == primeNumbers2)  //true dönmez!
    console.log(primeNumbers1 === primeNumbers2)
    

    var primeNumbers1 = [2, 3, 5, 7, 13, 17];
    var primeNumbers2 = primeNumbers1;
    console.log(primeNumbers1 === primeNumbers2); // true

    let prime = [1,2,3];
    let prime2 = [1,2,3];
    let a = prime;

    console.log(prime === a);
    */

   /*
    Because the array is an object. And when comparing objects, 
    we compare their reference value, rather than the actual objects.
    So in this case, primeNumber1 when compared with primeNumber2 will return false because they point to the different object locations. 
    The result will return true if only those variables refer to the same object. 
    The first variable is the fist list of prime numbers, 
    the second variable is the second list of prime numbers, 
    which are always distinct.
    */





                                //ES6 Sets



//Map ve Set arasındaki fark; map'da anahtar kelime olmak zorunda
/* 
const myset = new Set();

myset.add(100);
myset.add(100);     //daha önce oldğu içine eklenmeyecek
myset.add(3.14);
myset.add("Alp");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Alp"]);   //array'den set oluşturma

console.log(myset);
console.log(myset2);
console.log(myset.size);    //Size Metodu
myset.delete("Alp");        //Delete Metodu
console.log(myset);

console.log(myset.has(3.14));   //Has Metodu

const a = 3.14
myset.forEach(function(value){
    // if(value == a) console.log("gotcha");       //Primitive ile referans arasında tanımlama
    console.log(value);
});


for (let value of myset){
    console.log(value);
}


const array = Array.from(myset);    //set'lerden array oluşturma
console.log(array);

 */






// ES6 OOP

/* 
class Employee{

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim: "+ this.name + " Yaş: " + this.age + " Maaş: " + this.salary)
    }

}

const emp = new Employee("Alp",21,2000);

emp.showInfos();

 */



// Statik Metodlar

//standart
/* 
class Matematik{

    cube(x){
        console.log(x*x*x);

    }

}
const matematik = new Matematik();

matematik.cube(3)

console.log(matematik)

 */



//statik



/* 
class Matematik{

    static cube(x){
        console.log(x*x*x);

    }

    kare(x){
        console.log(x*x);
    }

}
Matematik.cube(3);

const matematik = new Matematik();

// matematik.cube(3)   //kullanılamıyor
matematik.kare(3)

 */






// ES6 KALITIM(inheritance)

/* 
class Person{
    constructor(name,age){  //superclass / BaseClass
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: "+ this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person{  //SubCLass,ChildClass,DerivedClass
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim: "+ this.name + " Yaş: " + this.age + " Maaş: " + this.salary)
    }

}
const emp = new Employee("Alp",21,2000);
console.log(emp)
emp.showInfos()
 */






