//return the nth triangular number from input n

//define function
function triangular(n){
    //return the nth triangular number from input n
    if(n < 0){
        return 0;
    } else {
        let Xn = n * (n + 1) /2;
        return Xn;
    }

}
//print the nth triangular number from input n
console.log(triangular(3));
console.log(triangular(5));
console.log(triangular(10));
console.log(triangular(50));