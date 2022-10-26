//string

//1. length --> panjang string
let text = "purwadhika";
console.log(text.length);

//2. slice --> mengambil bagian dari string
let text1 = "purwadhika";
console.log(text1.slice(0, 3)); //mengambil karakter dimulai dari index ke 0 sampai index ke 3, indeks terakhir tidak diambil

//3. substring -> sama seperti slice
let text2 = "purwadhika";
console.log(text2.substring(0, 3));

//4. replace --> mengganti karakter
let text3 = "purwadhika";
console.log(text3.replace("purwadhika", "pwdk"));

//5. toUpperCase & toLowerCase --> mengubah huruf menjadi kapital atau kecil
let text4 = "purwadhika";
console.log(text4.toUpperCase());
console.log(text4.toLowerCase());

//6. concat --> menggabungkan string
let text5 = "purwadhika";
let text6 = "digital school";
console.log(text5.concat(" ", text6));

//7. indexOf --> mencari index dari sebuah karakter
let text7 = "purwadhika";
console.log(text7.indexOf("w"));

let newChar = text7.slice(0, 1);
let newCharToUpperCase = newChar.toUpperCase();
console.log(newCharToUpperCase);

//number
//1. toString --> mengubah number menjadi string
let number1 = 123;
console.log(number1.toString());

//case1 : mengambil angka ke 2 dari number1
let number2 = number1.toString();
console.log(number2[1]);

//2. toFixed --> mengubah number menjadi string dengan jumlah angka dibelakang koma
let number3 = 123.456;
console.log(number3.toFixed(2));

//3. valueOf --> mengubah number menjadi number
console.log(number1.valueOf());

//4. parseInt --> mengubah string menjadi number
let number4 = "abc123123";
//5. Number --> mengubah string menjadi number
console.log(Number(number4))
console.log(parseInt(number4));


