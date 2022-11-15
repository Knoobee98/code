//case. kita memiliki sebuah fungsi penjumlahan,
//kemudian hasilnya kita tampilkan di dalam fungsi lain.

function penjumlahan(num1, num2){ // num1 = 1, num2 = 3
    return num1 + num2; //return 1 + 3 = 4
}

function output(data){ // 4 ---> data
    return data; //return 4
}

let result = penjumlahan(1, 3); // 4
console.log(output(result));

//callback function
//function yang dijadikan argument oleh function lain

//1. indirect callback
function penjumlahan1(num1, num2, callback){ // num1 = 1, num2 = 5, callback = output1
    return callback(num1 + num2); // output1(6)
}

function output1(data){ // 6 ---> data
    return data; // 6
}

console.log(penjumlahan1(1, 5, output1));

//2. direct callback
function penjumlahan2(num1, num2, callback){ // num1 = 1, num2 = 5, callback = output1
    return callback(num1 + num2); // output1(6)
}
console.log(penjumlahan2(1, 5, function output2(data){
    return data;
}));


