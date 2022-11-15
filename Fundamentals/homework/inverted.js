//inverted array
//turn any positive number into negative and otherwise
//Ex. [1,2,3,-4,-5] => [-1,-2,-3,4,5]

function inverted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>0){
            arr[i] *= -1;
        } else if(arr[i]<0){
            arr[i] *= -1;
        }
    }
    return arr;
}
function gro(arr){}
function grow(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] *= arr[i]+1;
    }
    return arr;
}    
console.log(inverted([1,2,3,-4,-5, 0]));
console.log(grow(1,2,3,4))