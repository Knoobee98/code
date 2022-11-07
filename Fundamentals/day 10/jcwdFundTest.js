//get the middle character of string from
//if odd, return middle character
//if even, return middle 2 characters
function getMidddleCharacter(str){
    if(str.length % 2 === 0){
        return str[str.length / 2 - 1] + str[str.length / 2]
    } else {
        return str[Math.floor(str.length / 2)]
    }
}

//repeat a character with first character uppercase
function accum(str){
    var output = '';
    for(let i = 0; i < str.length; i++){
        output += str[i].toUpperCase();
        output += str[i].repeat(i).toLowerCase();
        output += '-';
    }
    return output.slice(0, output.length - 1);
}

function accum2(str){
    var output = [];
    
    for(let i = 0; i < str.length; i++){
        let lower = str[i].toLowerCase();
        output.push(`${str[i].toUpperCase()}${lower.repeat(i)}`);
    }
    return output.join('-');
}

console.log(getMidddleCharacter('abcd'));
console.log(accum('RqaEzty'));
console.log(accum2('RqaEzty'));