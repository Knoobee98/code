let products = [
    {name: "apel", price: 10000, stock: 10},
    {name: "jeruk", price: 20000, stock: 20},
    {name: "mangga", price: 30000, stock: 30},
]

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);
for(let i = 0; i < products.length; i++){
    // console.log(products[i]);
    console.log(products[i].name);

}

/* 
    purwadhika mart
    apel price: 10000 stock: 10
    jeruk price: 20000 stock: 20
    mangga price: 30000 stock: 30
*/

let display = "purwadhika mart \n";
for(let i = 0; i < products.length; i++){
    display += `${products[i].name} - price: Rp.${(products[i].price).toLocaleString()} - stock: ${products[i].stock} \n`;
}
console.log(display);

