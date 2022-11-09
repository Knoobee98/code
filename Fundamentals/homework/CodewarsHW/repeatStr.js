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