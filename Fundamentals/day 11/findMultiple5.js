//find multiple 5
//Ex. Input=[1, 3, 10, 5, 100, 2, 8, 6], output = [10, 5, 100]
function multiple5(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%5 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(multiple5([1, 3, 10, 5, 100, 2, 8, 6]));