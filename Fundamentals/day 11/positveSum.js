function positiveSum(arr){
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum.push(arr[i]);
        }
    }
    return sum.reduce((a, b) => a + b, 0);
}
console.log(positiveSum([-1,-2,3,4,5,-6,-10]));