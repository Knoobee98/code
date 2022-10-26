console.log("Hello World");
console.log("Hello PWDK!");

//variable declaration
var makanan ; //declare variable
makanan = "Ayam"; //assign value to variable
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");
console.log("ayam kfc");

//var > let > const
//var diperbolehkan menggunakann nama vaariabel sama
//let tidak diperbolehkan menggunakann nama variabel sama
//const sama denga var, valuennya konstan

let makanan1 = "ayam";
let makanan2 = "ayam";
let makanan3 = "ayam";

//variable rules
//1. tidak boleh diawali dengan angka
//2. tidak boleh mengandung spasi
//3. tidak boleh mengandung simbol
//4. tidak boleh menggunakan kata kunci
//5. penamaan variable harus spesifik


var purwadhikaDigitalSchool = "pwdk";
let namaMahasiswa = "budi";
const namaKampus = "pwdk";
console.log(purwadhikaDigitalSchool);

//data types
//1. string => semua data yang diapit dengan *...* / '...' / "..." 
//2. number => semua data yang berupa angka
//3. boolean => true / false
//4. null => tidak ada nilai
//5. undefined => belum didefinisikan
//6. object => semua data yang berupa objek

//sring
let namaStudent = "iqbal";
console.log(typeof namaStudent);

//number
let umurStudent = 20;
console.log(typeof umurStudent);

//string literal
let namaDepan = "defryan";
let description1 = "nama saya adalah " + namaDepan;
let description2 = `nama saya adalah ${namaDepan}`; //string literal
console.log(description1);
console.log(description2);

//number integer and float
let discount = 10
let discount1 = 10.05
console.log(typeof discount);
console.log(typeof discount1);

//boolean
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

//modulus -> sisa bagi
let angka1 = 10;
let angka2 = 3;
let hasil = angka1 % angka2;
console.log(hasil);

//operators
//1. aritmatika
//2. perbandingan
//3. logika

//aritmatika
//1. penjumlahan +
let angka3 = 10;
let angka4 = 20;
let angka5 = "defryan";
console.log(angka3 + angka4 + angka5);
console.log(angka5 + angka3 + angka4);
//2. pengurangan -
//3. perkalian *
//4. pembagian /
//5. modulus %

//counter
let counter = 1;
counter++; //increment
counter++; //counter += 1
console.log(counter);
counter--; //decrement


//date
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

//modify in place
let n = 2;
n += 2;
n -= 1;
console.log(n);

let counter1 = 0;
console.log(++counter1); 
let counter2 = 10;
console.log(counter2++); //show: 10 - real:11
counter2++; //real:11;
console.log(counter2++); //show: 12 - real:12
counter2++; //real: 14
console.log(counter2++); //show: 14 - real:15
console.log(counter2); //show: 15
