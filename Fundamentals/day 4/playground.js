let products = ["Apel", "Mangga", "Jeruk"];
let prices = [10000, 15000, 20000];
let stock = [10, 15, 20];
let display = "Purwadhika Mart \n";
        // for(let i = 0; i <= products.length-1; i++){
        //     display += `${[i+1]} ${products[i]} | Price Rp.${prices[i].toLocaleString()} | stocks ${stock[i]} \n`;
            
        // }
        // let select = prompt(display + "\n" + "Select Product: ");
console.log(typeof products.length-3);
console.log(typeof products.length-2);
console.log(typeof products.length-1);
let select = "Apel";
let i = products.indexOf(select);
console.log(i);
// console.log(products[products.length-1]);
// console.log(products[products.length-2]);
// console.log(products[products.length-3]);
if(products[0] === "Apel"){
    console.log("Apel Ditemukan");
} else if(products[1] === "Mangga"){
    console.log("Mangga Ditemukan");
} else if(products[2] === "Jeruk"){
    console.log("Jeruk Ditemukan");
} else {
    console.log("Tidak Ditemukan");
}
