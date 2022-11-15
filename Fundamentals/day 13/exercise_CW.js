//kerjakan 5 soal codewars
//1. 
function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return a - b
}

//2.
function square(num){
    return Math.pow(num,2)
  }

//3.
function findDifferent(a, b){
    let resultA = 1;
    let resultB = 1;
    for(let i=0; i < a.length; i++){
    resultA *= a[i];
    };
    for(let j=0; j < b.length; j++){
        resultB *= b[j];
    }
    
    if(resultA > resultB){
        return resultA - resultB;
    } else if(resultB > resultA){
        return resultB - resultA;
    } else {
        return 0;
    }
}
console.log(findDifferent([3,2,5],[1,4,4]));

//4.
function pell(n) {
    if(n <= 2){
      return n;
    } else {
      return 2 * pell(n-1) + pell(n-2);
    }
}
console.log(pell(4));