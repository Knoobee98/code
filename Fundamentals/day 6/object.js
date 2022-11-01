//Object Oriented Programming
let products = ["apel", "jeruk", "mangga"];
let prices = [1000, 2000, 3000];
let stock = [10, 20, 30];

//Object
//Berisikan sepasang property dan juga value
//CRUD
let product = {
    name: "apel", // 'name' adalah key, 'apel' adalah value ---> sepasang key dan value disebut property
    price: 1000,
    stock: 10,
    origin: ["Malang", "bandung", "Jogja"],
    getName: () => { 
        console.log("getName");
        console.log(this.name); //menunjuk ke key 'name'
    }, //methods
    getName1(){
        console.log(this.name);
    },
}
console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.stock);
console.log(product["origin"]);
product.getName();
product.getName1();

product.name = "apel manis";
console.log(product);

delete product.name; //digunakan untuk menghapus property
console.log(product);

product.origin.shift();
console.log(product);


//accessing key
console.log(Object.keys(product));

//for in loop
for (let key in product) {
    console.log(key); //untuk mendapatkan key nya saja
    console.log(product[key]); //untuk mendapatkan value dari key
}

//optional chaining --->digunakan untuk mengakses nested property secara aman
let user = {
    address: {
        street: "GOP 9",
    }
}

console.log(user.address);
console.log(user.address?.street);

