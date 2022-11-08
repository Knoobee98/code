let tolls = [
    { id: 1, name: "jkt", price: 100000},
    { id: 2, name: "crbn", price: 150000},
    { id: 3, name: "smg", price: 200000},
    { id: 4, name: "jmbg", price: 250000},
    { id: 5, name: "sby", price: 300000},
];

let from = 0;
let to = 0;
let distance = 0;
let totalprice = [];

//input id kota asal
from = 3;
//input id kota tujuan
to = 1;
//hitung total biaya toll

totalprice.reduce((a, b) => a + b);
//output total bayar toll
console.log("Total bayar toll: " + totalprice.toLocaleString());