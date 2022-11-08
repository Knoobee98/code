//remove 'a' (create with function and looping)
//Ex. Argument1: "purwadhika", return "purwdhik"
//Ex. Argument2: "hello", return "hello"
//Ex. Argument3: "hai", return "hi"

function removedLetterA(str){
    var result = "";
    for(var i = 0; i < str.length; i++){
        if(str[i].toLowerCase() !== "a"){
            result += str[i];u
        }
    }
    return result;
}
console.log(removedLetterA("purwadhika"));
console.log(removedLetterA("hello"));
console.log(removedLetterA("hai"));