//stepbonacci

let stepbonacci = (step, max) => {
    let result = [0, step];
    for (let i = 2; i <= max; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    console.log(result);
}

stepbonacci(3, 10);
stepbonacci(1, 5);

//given array of integers, give point for each integer based on the following:
// - add 1 point for even number
// - add 3 points for odd number, except number = 3
// -add 5 point for number = 3

let points = (arr) => {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result += 1;
        } else if(arr[i] % 2 !== 0 && arr[i] !== 3){
            result += 3;
        } else if(arr[i] === 3){
            result += 5;
        }
    }
    console.log(result);
}

points([1, 2, 3, 4, 5])
points([25, 30, 55])
points([3, 3, 3])
