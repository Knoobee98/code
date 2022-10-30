
function HighestToLowest(arr){
    // let arr = [];
    let max = Math.max(...arr);
    console.log(max);
    let min = Math.min(...arr);
    console.log(min);
    let sum = arr.reduce((a, b) => a + b, 0);
    // console.log(sum);
    let avg = sum / arr.length;
    console.log(avg.toPrecision(2));
    
}
HighestToLowest([3, 2, 1]);
HighestToLowest([5, 4, 1, 3, 6]);
