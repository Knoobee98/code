//repeat string s with n number of times

//define function
function repeatStr (n, s) {
    //define result variable
    result = '';
    //loop through n times
    for(let i = 1; i <= n; i++){
        //repeat string s with n number of times
        result += s;
    }
    //return result
    return result;
  }
  //print result
  console.log(repeatStr(3, "*"));

//sum the string values

//define functiom
function sumStr(a,b) {
    //define result variable
    let result = 0;
    //add a and b to result
    result = Number(a) + Number(b);
    //return result
    return result.toString();
  
  }
  //print result
  console.log(sumStr("4","5"));
  console.log(sumStr("","2"));

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

//replace vowels with 1 and non vovels including non alpha characters with 0

//define function
function vowelOne(s){
    //define result variable
    let result = '';
    //define vowels
    let vowels = 'aeiouAEIOU';
    //loopp through each character in string s and replace vowels with 1 and non vovels including non alpha characters with 0
    for(let i = 0; i < s.length; i++){
      if(vowels.indexOf(s[i]) >= 0){
        result += 1;
      } else {
        result += 0;
      }
    }
    //return result
    return result;
  }
//print result
console.log(vowelOne("vowelOne"));
console.log(vowelOne("123, arou"));

//check square number by integral number

//define function
function checlSquareNumber(n){
    //check square number by integral number
    if(n < 0){
        return false;
    } else {
        let Xn = Math.sqrt(n);
        if(Number.isInteger(Xn)){
            return true;
        } else {
            return false;
        }
    }
}

