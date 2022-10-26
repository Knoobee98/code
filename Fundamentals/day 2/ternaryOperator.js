let txt = "Javascript";

if(txt === "Javascript"){
    console.log("Javascript");
} else {
    console.log("not Javascript");
}

//ternary operators
txt === "Javascript" ? console.log("Javascript") : console.log("not Javascript");

let points = 10;
if(points < 5){
    console.log("poin kurang");
} else if(points < 8){
    console.log("poin cukup");
} else {
    console.log("poin lebih");
}

//ternary operators
points < 5 ? console.log("poin kurang") : points < 8 ? console.log("poin cukup") : console.log("poin lebih");
