//continue function
function Greeting(name){
    const hello = "hello";

    console.log(`${hello}, ${name}`);
}
Greeting("Defryan");

//arrow function
let greeting1 = (name, bebas, asal) => {
    const hello = "Hai";
    console.log(`${hello}, ${name}`);
}
greeting1("Defryan", 2022, "futsal");

//function with default parameter
let greeting3 = (name ="Username!") => {
    console.log(`Hai, ${name}`);
}
greeting3();

//rest parameter
let myFunctions = (a, b, ...manyMore) => {
    console.log(a);
    console.log(b);
    console.log(manyMore[0] + manyMore[1]);
}
myFunctions("nasi", "air", "teh", "kopi");

let arrDuaDimensi = [["Purwadhika", ["digital", "School",]], 1, true, false]; //array 2 dimensi


console.log(arrDuaDimensi[0][1][0]);

//nested function
let mutia = () => {
    let tito = () => {
        console.log("Tito");
    }
    tito();
    console.log("Mutia");
}
mutia();

//closure function
//inner function yang dapat mengakses outer function
let greeting = () => {
    let name = "Ryan";
    let cetak = () => {
        console.log(`Hai, ${name}`);
    }
    cetak();
}
greeting();

//recursive function
let Countdown= (num) => {
    console.log(num);
    num--;
    if(num > 0){
        Countdown(num);
    }
}
Countdown(5);

let print = (num) => {
    console.log(num);
    
}
let angka = 10;
print(angka);