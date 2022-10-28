//array
//memiliki index penomoran untuk masing-masing data
let student1 = "Stephen";
let student2 = "Ashfi";
let student3 = "Aswin";
let student4 = "Nathan";
let student5 = "Tito";

student1 = "Gilang";

//crud
let students = ["Stephen", "Ashfi", "Aswin", "Nathan", "Tito"];

// console.log(students[0]);

students[0] = "Gilang";

delete students[0];

// console.log(students);

//method
let hewan = ["kucing", "anjing", "Gajah"];
// push --> digunakan untuk menambah data di akhir array dan
// disimpan di indeks terakhir
hewan.push("jerapah", "Semut");
console.log(hewan); //["kucing", "anjing", "Gajah", "jerapah", "Semut"]

// unshift --> digunakan untuk menambhakan data sebelum index paling awalan
hewan.unshift("laba-laba", "Harimau");
console.log(hewan); //["laba-laba", "Harimau", "kucing", "anjing", "Gajah", "jerapah", "Semut"]

// pop --> digunakan untuk menghapus data di indeks terakhir
hewan.pop(); //["laba-laba", "Harimau", "kucing", "anjing", "Gajah", "jerapah"]
hewan.pop(); //["laba-laba", "Harimau", "kucing", "anjing", Gajah"]
console.log(hewan);

// shift --> digunakan untuk menghapus data di indeks paling awal
hewan.shift();
console.log(hewan); //["Harimau", "kucing", "anjing", Gajah"]

let makanan = ["Bakso", "Bakwan", "Martabak", "Seblak", "Nasi Padang"];
//splice --> digunakan untuk menghapus atau menambah data di indeks tertentu
//splice(index, totalDataToDelete, dataInsert)
// makanan.splice(1, 2);
// makanan.splice(2, 2, "Boba", "Ayam Goreng");
makanan.splice(1, 0, "makanan baru");
console.log(makanan); //["Bakso", "makanan baru", "Boba", "Ayam Goreng", "Nasi Padang"]

//add data manual x splice
let campus = ["BSD", "Jakarta", "Batam"];
// campus.splice(12, 0, "Jogja");
campus[12] = "Jogja";
console.log(campus[9]); 
campus[9] = "surabaya";
console.log(campus);

//slice --> digunakan untuk mengambil data dari indeks tertentu
//slice(startIndex, endIndex) -->end index tidak diambil
let huruf = ["A", "B", "C", "D", "E"];
huruf = huruf.slice(0, 3); //["A", "B", "C"]
console.log(huruf);

// Includes & IndexOf
//includes --> digunakan untuk mencari data 
//indexOf --> digunakan untuk mencari posisi dari data kita berada di indeks ke berapa
let minuman = ["Air", "Jus", "Teh", "Kopi", "Susu"];
console.log(minuman.includes("Jus")); //true
console.log(minuman.includes("teh")); //false
console.log(minuman.includes("aerrr")); //false
console.log(minuman.indexOf("Teh")); //2

//concat --> digunakan untuk menggabungkan 2 array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2))

//split --> digunakan untuk memecah string menjadi array
let world = "Hello, Purwadika";
// console.log(world.split(" "));
console.log(world.split(""));

console.log(world.split("l"));