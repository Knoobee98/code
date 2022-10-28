//function
//sebuah baris program yang disimpan di suatu tempat
//dan bisa dipanggil kapanpun

//tahapan membuat function yaitu:
//1. deklarasi function
//2. memanggil function

//syntax
// function namaFunction() { --> bisa dipanggil sebelum function di build
//     //code
// }
Print(); // --> Hoisting
function Print(){
    console.log("Hello World");
}

//function expression
// let namaFunction = function() { --> tidak bisa dipanggil sebelum function di build
//     //code
// }
let PrintAyam = function(){ // anonymous function --> function yang tidak memiliki nama
    console.log("Ayam");
}
PrintAyam();

//function with parameter
//parameter bisa lebih dari satu
//dan penamaanya bebas

// function namaFunction(parameter1, parameter2, parameter3) {
//     //code
// }
function Output(text){
    console.log(text);
}
Output("Hello World");
Output("Test?");

function Calculator(a, b){
    console.log(a + b);
}
Calculator(3, 5); // --> 3, 5 adalah argument
Calculator(10, 20); // --> 10, 20 adalah argument

function DataDiri(nama, umur, hobi){
    console.log(`Nama saya ${nama}, umur saya ${umur} tahun, dan hobi saya ${hobi}`);
}
DataDiri("Stephen", 20, "Makan");

let ShowProgram = (nama, umur, hobi) => { // arrows function
    console.log(`Nama saya ${nama}, umur saya ${umur} tahun, dan hobi saya ${hobi}`);
}
ShowProgram("Stephen", 20, "Makan");

//function with return
//function yang hanya menjalankan sesuatu
//function yamg menjalankan sesuatu

function validation(phoneNumber){
    if(phoneNumber.toString().length < 8 || phoneNumber.toString().length > 13){
        return false;
    } 
    
    if(isNaN(phoneNumber)){
        return false;
    } else {
        return true;
    }

}

let result = validation("08123375676");

if(result){
    console.log("Nomor sudah benar, registrasi sukses");
} else {
    console.log("Nomor tidak valid, registrasi gagal");
}
