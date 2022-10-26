//conditional statement

//if statement
let age = 21;
//if(condition){
//    //code
//} 
//ketika kondisi terpenuhi maka akan menjalankan code
if (age > 17){
    console.log("Register Success!");
}

//if else statement
//if(condition){
//    //code
//}else{ action default apabila kondisi tidak terpenuhi/bernilai false
//    //code
//}
let ageUser = 20;
if(ageUser > 17){
    console.log("Register Success!");
}else{
    console.log("Register Failed!");
}

//if else if statement (chaining condition)
//if(condition){
//    //code
//}else if(condition){
//    //code
//}else{
//    //code
//}
let nilaiModul = 100;
if(nilaiModul < 80){
    console.log("remedial");
} else if(nilaiModul <= 100){
    console.log("lulus");
} else{
    console.log("nilai tidak valid");
}

//nested if statement
//if(condition){
//    //code
//    if(condition){
//        //code
//    }
//}
let point = 10; //nilai sedikit
if(point > 0){
    if(point < 30){
        console.log('point sedikit');
    } else {
        console.log('point banyak');
    }
} else {
    console.log('point tidak valid');
}

let point1 = "0"; //niai sedikit
if(point1 >= 0){
    if(point1 < 30){
        console.log('point sedikit');
    } else {
        console.log('point banyak');
    }
} else {
    if(point1 > -10){
        console.log('point minus');
    } 
}

