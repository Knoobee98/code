//find total blank spaces
//Ex. Input="Jangan-jangan kamu adalah aku!", output = 3
function findBlankSpace(str){
    let result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].includes(" ")){
            result += 1;
        }
    }
    return result;
}
console.log(findBlankSpace("Jangan-jangan kamu adalah aku!") + " space");