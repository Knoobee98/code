//celcius to fahrenheit
//step 1: define variable
let cel = 0;
//step 2: hitung menggunakan rumus
let fah = cel * 9/5 + 32; //celcius to fahrenheit formula
//step 3: tampilkan hasil
console.log(`${cel} celcius = ${fah} fahrenheit`);

//check odd or even number 
//bilangan genap : bilangan yang habis dibagi 2
//bilangan % 2 === 0 (bilangan genap)
//bilangan % 2 === 1 (bilangan ganjil)

//step 1: define variable
let num = 10;
//step 2: hitung menggunakan rumus
if(num % 2 == 0){
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}

//check prime number
//bilangan prima : bilangan yang hanya habis dibagi 1 dan bilangan itu sendiri
//v1
let num1 = 10;
if(num1 % 2 != 0){ //check if number is prime or not
    console.log(`${num1} is prime`);
} else {
    console.log(`${num1} is not prime`);
}

//v2
let number = 17;
let primeNumber = 0;
for(let i = 1; i <= number; i++){ //1<=5? true ---> 2<=5? true ---> 3<=5? true ---> 4<=5? true ---> 5<=5? true ---> 6<=5? false
    if(number % i === 0){ //5 % 1 == 0? true ---> 5 % 2 == 0? false ---> 5 % 3 == 0? false ---> 5 % 4 == 0? false ---> 5 % 5 == 0? true
        primeNumber++; //primeNumber = 1 --> primeNumber = 1, 5
    }
}

if(primeNumber === 2){
    console.log(`${number} is prime`);
} else {
    console.log(`${number} is not prime`);
}

//v3
for(let i = 2; i <= number; i++){
    if(number % i === 0){
        console.log(`${number} is not prime`);
        break;
    }
    if(i === number-1){
        console.log(`${number} is prime`);
    }
}

//sum of n number
let n = 5;
let sum = n * (n + 1) / 2; //sum of n number
console.log(`sum of ${n} number is ${sum}`);

//find factorial of a number
let num2 = 5;
let fact = 1;
for(let i = 1; i <= num2; i++){ 
    fact *= i; 
}
console.log(`factorial of ${num2} is ${fact}`);

//print first n fibonacci number
let num3 = 5;
let n1 = 0;
let n2 = 1;
let nextTerm;
for(let i = 1; i <= num3; i++){ // loop over fibonacci numbers
    console.log(n1); // print the first number
    nextTerm = n1 + n2; // next term is the sum of previous two terms
    n1 = n2; // update n1
    n2 = nextTerm; // update n2
}

let fibo = [0, 1];
for(let i = 2; i < num3; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

let fibo2 = "001";
let input = 5;

for(let i = 3; i < input; i++){
    fibo2 += Number(fibo2[i-1]) + Number(fibo2[i-2]);
}
console.log(fibo2);