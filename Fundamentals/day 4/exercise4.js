//BMI Calculator

function Bmi(berat, tinggi){
    let bmi = berat / Math.pow((tinggi/100), 2);

    //v1
    // if(bmi < 18.5){
    //     console.log("less weights");
    // } else if(18.5 <= bmi < 24.9){
    //     console.log("ideal");
    // } else if(25.0 <= bmi < 29.9){
    //     console.log("overweight");
    // } else if(30.0 <= bmi < 39.9){
    //     console.log("very overweight");
    // } else if(bmi >= 39.9){
    //     console.log("obesity");
    // }

    //v2
    if(bmi < 18.5){
        console.log("less weights");
    } else if(bmi < 24.9){
        console.log("ideal");
    } else if(bmi < 29.9){
        console.log("overweight");
    } else if(bmi < 39.9){
        console.log("very overweight");
    } else if(bmi >= 39.9){
        console.log("obesity");
    }
    return bmi;
}

//buzz fizz
function BuzzFizz(n){
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("BuzzFizz");
        } else if(i % 3 === 0){
            console.log("Buzz");
        } else if(i % 5 === 0){
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

BuzzFizz(30);
Bmi(68, 175);

