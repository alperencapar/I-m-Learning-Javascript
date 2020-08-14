let dt = new Date();
console.log(dt);
console.log(dt.getMonth()+1);   //ay gösterme (0 ocak, 1 şubat)
console.log(dt.getDate());      //gün
console.log(dt.getFullYear());  //yıl



// ----


let dtA = new Date("8/24/2010 14:50:10");
console.log(dtA);




//1 gün öncesini bulma
let dtC = new Date("1/1/1990");

console.log(dtC);
let dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);




//2 tarih arasında geçen süre
let start = new Date("1/1/1990");
let end = new Date("1/1/1991");

let ms = end - start;
console.log("Milisaniye: "+ms);

let saniye = ms / 1000;
console.log("Saniye: "+saniye);

let dakika = saniye / 60;
console.log("Dakika: "+dakika);

let saat = dakika / 60;
console.log("Saat: "+saat);

let gun = saat / 24;
console.log("Gün: "+gun);




//yaş hesaplama

let birthday = new Date("04/21/1999");  //gün ay yıl olarak doğum gününü belirliyoruz
let ageDifMs = Date.now() - birthday.getTime(); //şuanki zaman ile doğum günü çıkarılıyor
let ageDate = new Date(ageDifMs);           //çıkan sonucu tarih olarak atıyoruz
console.log(ageDate.getFullYear() - 1970);  //sonuçtan 1970 değerini çıkartıyoruz


