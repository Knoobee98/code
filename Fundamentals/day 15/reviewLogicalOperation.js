// logical operations
// AND &&
// - kedua kondisi bernilai true, maka hasil akhirnya akan true
// - apabila salah satu kondisi bernilai false, maka hasil akhirnya akan false

let point = 100;
if(point && point > 100){
    console.log("poin tinggi")
}

if(point && !(point > 100)){
    console.log("poin masih tinggi")
}

//OR
//salah satun kondisi bernilai rendah 
//maka hasil akhirnya akan true
let discount = 75;
let result = discount || discount > 50? "ABC" : false;

let newresult;
if(discount || discount > 50){
    newresult = "ABC"
} else {
    newresult = false
}

//NOT
// - kebalikannya