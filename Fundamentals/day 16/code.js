function findX(n){
    let x = 0;
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < 2*n; j++) {
            x += i + j;
        }
    }
    return x;

}
console.log(findX(15));
console.log(findY(15));

//find x value for n values faster

function findY(n){
    let y = 0;
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < 2*n; j++) {
            y += i + j;
        }
    }
    return y;
}