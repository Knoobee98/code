//sum number only
//Ex. Input: [1,"abc", 100, -10, 0, -30]; Output: 61 
function SumNumber(arr){
    let sum = [];
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            sum.push(arr[i]);
        }
    }
    return sum.reduce((a, b) => a + b, 0);
}
console.log(SumNumber([1, "abc", 100, -10, 0, -30]));