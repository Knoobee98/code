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