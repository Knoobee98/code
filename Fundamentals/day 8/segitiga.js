let star = "";
let number = 1;
for(let i = 0; i <= 5; i++){
    for(let j = 0; j <= i; j++){
        star += "* "
        // star += number;
        // number++;
    }
    star += "\n"
}
console.log(star);