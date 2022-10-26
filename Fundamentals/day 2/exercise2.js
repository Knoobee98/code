//celcius to fahrenheit
let cel = 30;
let fah = cel * 9/5 + 32; //celcius to fahrenheit formula
console.log(`${cel} celcius = ${fah} fahrenheit`);

//check odd or even number 
let num = 10;
if(num % 2 == 0){
    console.log("number is even");
} else {
    console.log("number is odd");
}

//check prime number
let num1 = 12;
if(num1 % 2 != 0){
    console.log("number is prime");
} else {
    console.log("number is not prime");
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
let num3 = 6;
let n1 = 0;
let n2 = 1;
let nextTerm;
for(let i = 1; i <= num3; i++){ // loop over fibonacci numbers
    console.log(n1); // print the first number
    nextTerm = n1 + n2; // next term is the sum of previous two terms
    n1 = n2; // update n1
    n2 = nextTerm; // update n2
}