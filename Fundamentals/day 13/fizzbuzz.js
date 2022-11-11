function BuzzFizz(n){
    let result = [];
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz");
        } else if(i % 3 === 0){
            result.push("Fizz");
        } else if(i % 5 === 0){
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

function JumlahDeret(n) {
    let jumlahDeret = 0
    for(let i = 1; i<=n; i++){
        if(i%3 == 0 || i%5 == 0){
            jumlahDeret += i
        } 
    }
    return jumlahDeret
}

function split(str){
    let result = [];
    result = str.split(" ");
    return result;
}
// console.log(split("hello world"));
module.exports = {BuzzFizz, JumlahDeret, split};