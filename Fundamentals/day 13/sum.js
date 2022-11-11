function sum(num1, num2){
    return num1 + num2;
}

function validate(email){
    if(email.includes("@")){
        return true;
    } else {
        return false;
    }
}

module.exports = {sum, validate};