//star pattern reverse triangle

let triangles = (t, p) => {
    let result = '';
    for(let i = 0; i < t; i++){
        for(let j = 0; j < p; j++){
            if(j >= i && j < p-i){
                result += '*';
        } else {
            result += ' ';
        }
    }    
    result += '\n';
    }
    console.log(result);
}

triangles(5, 3)