//four chars
//create a function to validate total characters of strings
//Ex. Argrument1: "abc", return true
//Ex. Argument2: "purwadhikadigitalschool", return false
//Ex. Argument3: "", return false

function fourChar(argument) {
    argument = "";
    if(argument.length < 10){
        return true;
    }else if(argument.length <= 0){
        return false;
    } else {
        return false;
    }
}
console.log(fourChar("abc"));
console.log(fourChar("purwadhikadigitalschool"));
console.log(fourChar());
