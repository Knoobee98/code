//market
let products = [
    {name: "apel", price: 10000, stock: 10},
    {name: "jeruk", price: 15000, stock: 10},
    {name: "mangga", price: 20000, stock: 20},
]

let cart = [];
let total = 0;
let display = "Purwadhika Mart \n";
//tampilan menu
for(let i = 0; i < products.length; i++){
    display += `${i+1}. ${products[i].name} ${products[i].price} (${products[i].stock}) \n`;
}

//input nomor barang
let input = prompt(display + "masukkan nomor barang yang ingin dibeli:");

//input jumlah barang
let quantity = prompt("masukkan jumlah barang yang ingin dibeli:");
let index = input - 1;
let product = products[index];
let subtotal = product.price * quantity;
let stock = product.stock - quantity;
//pembelian barang
if(input == products[index].name){
    if(quantity <= products[index].stock){
        cart.push({name: products[index].name, price: products[index].price, quantity: quantity, subtotal: subtotal});
        products[index].stock = stock;
        total += subtotal;
        console.log("barang berhasil dibeli");
        //konfirmasi pembayaran
        confirm = prompt("Apakah anda ingin melanjutkan pembayaran? (y/n)");
        if(confirm == "y"){
            //masukan uang
            let money = prompt("masukkan uang anda:");
            //cek uang apakah sesuai atau tidak
            if(money > total){
                let change = money - total;
                console.log(`Pembayaran berhasil, kembalian anda adalah ${change}`);
            }else{
                console.log("uang anda tidak cukup");
            }
        }else{
            console.log("Pembayaran dibatalkan");
        }
    }else{
        console.log("barang tidak tersedia");
    }
}else{
    console.log("barang tidak tersedia");
}
