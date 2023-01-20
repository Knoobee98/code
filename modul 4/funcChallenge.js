//1. forward alphabet
// Ex.  text = 'y'
//      move = 5
//      result = 'd'
// Ex.  text = 'pizza'
//      move = 3
//      result = 'slccd'

//2. remove duplicate numbers
// Ex. arrNumbers = [3, 5, 3, 1, 2, 5]
//     result = [3, 5, 1, 2]

function forwardAlphabet(text, move){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i = 0; i < text.length; i++){
        let index = alphabet.indexOf(text[i]);
        let newIndex = index + move;
        if(newIndex > 25){
            newIndex = newIndex - 25;
        }
        result += alphabet[newIndex];
    }
    console.log(result)

}

forwardAlphabet('abcde', 3);

function RemoveDuplicate(arrNumbers){
    let result = [];
    for(let i = 0; i < arrNumbers.length; i++){
        if(result.indexOf(arrNumbers[i]) === -1){
            result.push(arrNumbers[i]);
        }
    }
    console.log(result)
}

RemoveDuplicate([3,5,3,1,2,5]);

const remove = (arrNumbers) => {
    let result = []
    for(let i = 0; i < arrNumbers.length; i++){
        !result.includes(arrNumbers[i])? result.push(arrNumbers[i]) : null
    }
    console.log(result)
}

remove([3,5,3,1,2,5]);