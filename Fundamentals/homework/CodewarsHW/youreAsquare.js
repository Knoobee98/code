//check square number by integral number

//define function
function checlSquareNumber(n){
    //check square number by integral number
    if(n < 0){
        return false;
    } else {
        let Xn = Math.sqrt(n);
        if(Number.isInteger(Xn)){
            return true;
        } else {
            return false;
        }
    }
}