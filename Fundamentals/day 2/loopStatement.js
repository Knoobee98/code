//loop statement
//while
//while(condition){
//    //code
//}
let inii = 1;
while(inii < 3){ //1 < 3? true ---> 2 < 3? true ---> 3 < 3? false
    console.log("pizza");
    inii++;
}

//do while
//do{
//    //code
//}while(condition)
let inii1 = 1;
do{
    console.log("ayam goreng");
    inii1++;
}while(inii1 < 3);

//for loop
//for(initialization; condition; increment){
//    //code
//}

for(let i = 1; i <= 5; i++){ //1 <= 5? true ---> 2 <= 5? true ---> 3 <= 5? true ---> 4 <= 5? true ---> 5 <= 5? true ---> 6 <= 5? false
    console.log(i); //1, 2, 3, 4, 5
}

//break
//digunakan untuk menghentikan proses looping

//case1 : saya ingin mengecek value inputan user. apabila valuenya mengandung huruf, maka munculkan error
let nomorHp = "081abc";
for(let i=0; i < nomorHp.length; i++){ //0 < 6? true ---> 1 < 6? true ---> 2 < 6? true ---> 3 < 6? true ---> 4 < 6? true ---> 5 < 6? true ---> 6 < 6? false
    if(isNaN(nomorHp[i])){ //nomorHp[0] = 0 < 0? false ---> nomorHp[1] = 8 < 0? false ---> nomorHp[2] = 1 < 0? false ---> nomorHp[3] = a < 0? true
        console.log("error");
        break;
    }
    console.log(nomorHp[i]); //0 --> 8 --> 1
}

for(let i=1; i<=5; i++){
    console.log(i); //1 --> 2 --> 3
    if(i === 3){
        break;
    }
}

//continue
//digunakan untuk melanjutkan proses looping jika kondisi terpenuhi

for(let i=1; i<6; i++){
    if(i === 1){
        continue;
    }
    console.log(i); //1 --> 2 --> 4 --> 5
}

//tugas dirumah
//buat looping untuk alert dan prompt di file html