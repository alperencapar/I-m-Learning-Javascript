//var-let-const ile değişken tanımlama yapılır, const sonradan değiştirilemez


//JS'de değişken tanımlarken, değişkenin tipini belirtmeye gerek yoktur. 

//Tür dönüşümü sırasında sayısal değere dönüştürülmeyen değerler için 
//NaN özel sembolik değeri oluşturulur

//Tür dönüşümleri

/* 

Number(deger)
parseInt(deger)
parseFloat(deger)
Boolean(deger)
toString()

*/

/* 
let x = "3";
console.log(typeof(x));
x = parseInt(x);
console.log(typeof(x));


x = toString(x);
console.log(typeof(x));

x = Number(x);
console.log(typeof(x));

x = Boolean(x);
console.log(x);             //1 ise true diğerlerinde false döner

console.log(typeof(x));

let dogru = 1;
dogru = Boolean(dogru);
console.log(dogru);

 */


//MATH Kütüphanesi

/* 
//ceil() => Yukarı doğru en yakın tam sayıya yuvarlama için kullanılır
console.log(Math.ceil(1.4));

//floor() => Aşağı doğru en yakın tam sayıya yuvarlar.
console.log(Math.floor(1.6));

//round() => Sayıyı en yakın tam sayıya yuvarlar
console.log(Math.round(2.51),Math.round(2.49)); //3,2

//max() => değerlerden en büyüğünü döndürür
console.log(Math.max(5, 10,3,25));

//min() => değerlerden en küçüğünü döndürür
console.log(Math.min(5, 10,3,25));


//pow() => Sayının kuvvetini hesaplamak için kullanılır, üs alma fonksiyonudur
console.log(Math.pow(4, 3));

//random() => 0-1 arasında rastgele bir sayı üretir
console.log(Math.random()*10);


//Math.abs(x)	Sayının mutlak değerini verir. ( |-2| =2 )
console.log(Math.abs(-4));


 */

//Array - Diziler

/* 
let dizi1 = new Array('bir','iki','üç');

let dizi2 = new Array(10);

let dizi3 = ['bir','iki','üç'];
 */

/* console.log(dizi1.length);                       // length	Array dizisi içindeki eleman sayısını verir.
console.log(dizi1.pop()),console.log(dizi1);     // pop	Bir dizideki son elemanı geri döndürür ve array içinden siler.
console.log(dizi1.push("dört")),console.log(dizi1); */                    // push	Array dizisinin sonuna bir veya daha fazla eleman ekler.
                                                //Every  tüm elemanları karşılaştırma operatörü aracılığıyla kontrol edilmesine yarar.( true, false ).
                                                //Filter dizinin elemanlarını filtrelemeyi sağlar. Yeni bir dizi olarak dönecektir. Dizinin elemanlarını değiştirmez.

                                                // reverse	Array elemanlarının yerlerini ilk değer sona, son değer başa gelecek şekilde değiştirir.
                                                // shift	Array dizisindeki ilk elemanı verir ve bu elemanı dizi içinden siler.
                                                // unshift	Array dizisinin başına bir veya daha fazla sayıda eleman ekler.
                                                // slice	Array dizisinin bir bölümünü alır ve yeni bir array olarak geri döndürür.
                                                // sort	Array elemanlarını sıralar.
                                                // splice	Array içeriğini, elemanları silerken yeni elemanlar ekleyerek değiştirir.
//https://cagatay.me/javascript-i̇le-temel-dizi-i̇şlemleri-javascript-array-operations-de040d8ac41e



//Template Literal
let name="Gboi";
let department="Bilişim";
let salary=4500;

const a = `İsim:${name}\nDepartman: ${department}\nMaaş: ${salary}`;
console.log(a);


//Uzun
/* 
const html = "<ul>" +
                "<li>" + name + "</li>" +
                "<li>" + department + "</li>" +
                "<li>" + salary + "</li>" +
            "</ul>";

document.body.innerHTML = html;
 */

const html = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10/4}</li>    
                <li>${abba()}</li>    
            </ul>
            `;              //javascript kodu, fonksyion vs çalıştırabiliyoruz
document.body.innerHTML = html;

function abba(){
    return "Merhabalar amQ";
}



