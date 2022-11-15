//function
// sebuah wadah yang terisolasi yang berisikan baris program di dalamnya

// - function declaration
function A(){
    //block of code
}
// - function expression
let B = function(){
    //block of code

}
// - arrow function
let C = () => {
    //block of code
}

// - function with parameter
let myFunc = (param1, param2) => {
    console.log (param1 + param2);
}
myFunc(1,2);

// - function with return
let newFunct = (sapa) => {
    return sapa;
}
let displayNewFunc = newFunct("Hello");

console.log(displayNewFunc);

// callback function
// function yang dijadikan argument di function lain
// 1. indirect
let output = (data) => {
    return data;
}
let penjumlahan = (a, b, cb) => {
    return cb(a+b);
}
console.log(penjumlahan(5,10,output));

// 2. direct
let penjumlahan2 = (a, b, cb) => {
    return cb(a+b);
}
console.log(penjumlahan2(5,10,(data) => {
    return data;
}));