let obj1 = {
    b: 1,
    c: 4,
}
let obj2 = {
    c: 4,
    a: 1,
}

key1 = Object.keys(obj1)
value1 = Object.values(obj1);
key2 = Object.keys(obj2)
value2 = Object.values(obj2);
console.log(key1, value1, key2, value2);


function compareKey(key1, key2, value1, value2){
    let result = [];

    for(let i = 0; i < key1.length; i++){
        for(let j = 0; j < key2.length; j++){
            if(key1[i] === key2[j]){
                if(value1[i] === value2[j]){
                    result.push(key1[i]);
                } else {
                    return false;
                }
            }
        }
    }
    return result;
        
}
console.log(compareKey(key1, key2, value1, value2));