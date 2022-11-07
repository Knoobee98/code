//uppercase wave
//Ex. input: abc ---> output: Abc aBc abC
function uppercaseWave(string) {
    var output = []
    for(var i = 0; i < string.length; i++){
        var temp = ''
        for(var j = 0; j < string.length; j++){
            if(i === j){
                temp += string[j].toUpperCase()
            } else {
                temp += string[j]
            }
        }
        output.push(temp)
    }
    return output
}

//MaxRange
//Ex. (angkaPertama, MaxRange, Range) ---> (2, 10, 2) ---> output: [2, 4, 6, 8, 10]
function MaxRange(angkaPertama, MaxRange, Range){
    var output = []
    for(var i = angkaPertama; i <= MaxRange; i += Range){
        output.push(i)
    }
    return output
}
console.log(uppercaseWave('tito'))
console.log(MaxRange(2, 30, 4));
