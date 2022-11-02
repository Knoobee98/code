let obj1 = {
    alamat: "ryan",
    hobi: "berkuda",
};

let obj2 = {
    hobi: "ryan",
    alamat: 20,
    
};

function comparison(obj1, obj2){
    let arr1 = [];
    let arr2 = [];
    for(let key in obj1){
        arr1.push(key);
    }

    for(let key in obj2){
        arr2.push(key);
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])){
            
        } else {
            return false;
        }
        
    }
    return true;
}
console.log(comparison(obj1, obj2));