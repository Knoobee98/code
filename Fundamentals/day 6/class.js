//Class
//Digunakan untuk membuat sebuah object dengan nama key yg seragam

// class Products{
//     name = "";
//     price = 0;
//     stock = 0;

//     constructor(name, price, stock){
//         this.name = name,
//         this.price = price,
//         this.stock = stock
//     }
// }

// // let product1 = new Products("apel", 10000, 10);
// // let product2 = new Products("jeruk", 20000, 20);
// // console.log(product1);
// // console.log(product2);

// let arrProducts = [
//     new Products("apel", 10000, 10),
//     new Products("jeruk", 20000, 20),
//     new Products("mangga", 30000, 30),
// ]

// console.log(arrProducts);
// for(let i = 0; i < arrProducts.length; i++){
//     console.log(`${arrProducts[i].name}`);
// }

//inheritance
//buah
//1. Nama, Harga, stok, berat, warna, satuan
//Elektronik
//1. nama, harga, stok, berat, warna, satuan, merk, ukuran
//pakaian
//1. nama, harga, stock, warna, satuan, merk, ukuran


// class NewProducts{ //parent class
//     nama = "";
//     harga = 0;
//     stok = 0;
//     warna = 0;
    
//     constructor(nama, harga, stok, warna){
//         this.nama = nama,
//         this.harga = harga,
//         this.stok = stok,
//         this.warna = warna
//     }
// }

// class Buah extends NewProducts{ //child class
    
//     berat = 0;
//     satuan = "`";

//     constructor(nama, harga, stok, warna, berat, satuan){
//         super(nama, harga, stok, warna);
//         this.berat = berat,
//         this.satuan = satuan
//     }
// }

// let buah1 = new Buah('apel', 10000, 10, 'merah', 1, 'Kg'); //nana: 'apel', harga: 10000, stok: 10, warna: 'merah', berat: 1, satuan: 'Kg'
// console.log(buah1);

// class Elektronik extends NewProducts{ //child class
//     merk = "";
//     berat = 0;
//     satuan = "";
//     ukuran = 0;


//     constructor(nama, harga, stok, berat, warna, merk, type, satuan){
//         super(nama, harga, stok, warna);
//         this.merk = merk,
//         this.type = type,
//         this.berat = berat,
//         this.satuan = satuan
//     }
// }

// let elektro1 = new Elektronik('hp', 10000, 10, 'merah', 'samsung', 'hp', 1, 'kg'); //nama: hp, harga: 10000, stok: 10, warna: merah, merk: samsung, type: hp, berat: 1, satuan: kg
// console.log(elektro1);

// class Baju extends NewProducts{ //child class
    
//     ukuran = 0;
//     merk = "";
//     bahan = "";
//     type = "";

//     constructor(nama, harga, stok, warna, ukuran, merk, bahan, type){
//         super(nama, harga, stok, warna);
//         this.ukuran = ukuran,
//         this.merk = merk,
//         this.bahan = bahan,
//         this.type = type
//     }

// }

// let baju1 = new Baju('kemeja', 10000, 10, 'merah', 'L', 'nike', 'cotton', 'pria');
// console.log(baju1);

//public & private properties
class User{
    name = ""; //public properties
    #email = ""; //private properties

    constructor(name, email){
        this.name = name,
        this.#email = email
    }
}

let user1 = new User("john", "john_d@yahoo.com");
console.log(user1);

//getter & setter
class User1{
    name = "";
    #email = "";

    constructor(name){
        this.name = name
    }

    get getEmail(){ //getter ---> untuk mengambil data, khususnya data private atau data yang ingin dimodifikasi terlebih dahulu
        if(this.#email.length !== 0){
            let modified = `***${this.#email.slice(4, this.#email.length)}`;
            return modified;
        } else {
            return "email tidak ditemukan";
        }
       
    }

    set saveEmail(email) {
        if(!email.includes("@")){
            console.log("email tidak valid");
        }else{
            this.#email = email;
        }
    }
}
let user2 = new User1("Adam Warlock", "ADamWa@lock.com");
user2.saveEmail = "zachraarygmail.com"
console.log(user2);
console.log(user2.getEmail);

class User3{

}