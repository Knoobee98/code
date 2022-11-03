obj1 = {
    a: 1,
    b: 2,
}
obj2 = {
    a: 1,
    c: 5,
}
function compare(){
    let arr1 = [];
    let arrVal1 = [];

    let arr2 = [];
    let arrVal2 = [];

    for(let key in obj1){
        arr1.push(key);
        arrVal1.push(obj1[key]);
    }

    for(let key in obj2){
        arr2.push(key);
        arrVal2.push(obj2[key]);
    }

    let objectNew = {};
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            let idxarr2 = arr2.indexOf(arr1[i]);
            if(arrVal1[idxarr2] === arrVal1[i]){
                objectNew[arr1[i]] = arrVal1[i];
            }
        }
    }
    return objectNew;
}
console.log(compare());