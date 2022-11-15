// looping : starting point, condition, exit point
// - while : dia memeriksa kondisi terlebih dahulu, baru menjalankan program di dalamnya
// - do while : selalu menjalankan program di dalamnya, baru memeriksa kondisi
// - for loop : sama seperti while, hanya berbeda syntax penulisannya

//case. tampilkan setiap data yang ada di dalam array
let arr1 = ["a", "b", "c"];
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//case. menampilkan seluruh hasil looping dari sebuah array
let arr2 = [1, 2, 3];
let display = [];
for(let i = 0; i < arr2.length; i++){
    display.push(arr2[i]);
}
console.log(display);

let start = 0;
let display1 = [];
while(start < arr2.length){
    display1.push(arr2[start]);
    start++;
}
console.log(display1);

let i = 0;
while(i < arr1.length){
    console.log(arr1[i]);
    i++;
}

//case. menjumlahkan setiap value yang ada di dalam array
let nums = [1, 2, 3, 4, 5]; //15
let result = 0;
for(let i = 0; i < nums.length; i++){
    result += nums[i];
}
console.log(result);

// nested loop
let arrNumbers = [1, 2, 3];
let arralpha = ["a", "b", "c"];
for(let i = 0; i < arrNumbers.length; i++){
    console.log(`looping i : ${arrNumbers[i]}`);
    for(let j = 0; j < arralpha.length; j++){
        console.log(`looping j : ${arralpha[j]}`);
    }
}

let display3 = "";
for(let a = 1; a <= 5; a++){
    for(let b = 5; b >= 1; b--){
        display3 += " * ";
    }
    display3 += "\n";
}
console.log(display3);

let float = parseFloat("Halo3824");
console.log(float);
let int = parseInt("128.34");
console.log(int);