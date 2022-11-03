// let star = "";
// let number = 1;
// for(let i = 4; 1 <= i; i--){
//     for(let j = 1; j <= i; j++){
//         star += "* "
//         // star += number;
//         // number++;
//     }
//     star += "\n"
// }
// console.log(star);

let star3 = '';
for(let i = 2; 0 <= i; i--){
    for(let j = 0; j <= 4; j++){
        if(j >= i && j <= 4-i){
            star3 += '* ';
        } else {
            star3 += '  ';
        }
    }
    star3 += '\n'
}

console.log(star3);