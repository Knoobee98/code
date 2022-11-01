
let angka1 = 20;
let angka2 = 10;

function tambah(num1, num2){
    var result;
    if(num1 !== num2){
        result = num1 + num2;
        console.log(result);
    } else {
        console.log("angka tidak boleh sama");
    }
}
 tambah(10, 15);

 //#1
//triangle with for loop
let triangle = (num) => {
    for(let i = 1; i <= num; i++){
        let str = " ";
        for(let j = 1; j <= i; j++){
            str += "* ";
        }
        console.log(str);
    }
}
triangle(5);

// let height = 5;
// for(let i = 1; i <= height; i++){
//     let str = " ";
//     for(let j = 1; j <= i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

//#5
//string to array
let StrToArr = (str) => {
    let arr = str.split(" ");
    console.log(arr.join(", "));
}
StrToArr("Apel Pisang Jeruk Leci Kelengkeng Dukuh");

//#2
// let FizzBuzz = (n) => {
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz");
//         } else if(i % 3 === 0){ //bilangan kelipatan 3
//             console.log("Fizz");
//         } else if(i % 5 === 0){ //bilangan kelipatan 5
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
let jumlahKelipatan = (n) => {
    var total = 0;
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0){
            total += i;
        } else if(i % 5 === 0) {
            total += i;
        }
    }
    console.log(`total : ${total}`);
}
// FizzBuzz(15);
jumlahKelipatan(16);
//#4
let OddtoEven = (arr) => {
    let odd = [];
    let even = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log(`even : ${even.join(", ")}`);

}
OddtoEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);