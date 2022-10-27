
//case. tentukan kelulusan seseorang berdasarkan nilai dengan ketentuan:
//nilai < 70 = tidak lulus
//nilai < 80 = lulus aja
//nilai < 90 = lulus banget
let nilai = 80;

if(nilai < 70){
    console.log("tidak lulus");
} else if(nilai < 80){
    console.log("lulus aja")
} else if(nilai < 100){
    console.log("lulus banget")
}

//case 1. tentukan berat badan seseorang apakah ideal atau tidak, dengan ketentuan:
//........BB < 50 --> Kurus Banget
//........BB < 70 --> Kurus Aja
//........BB < 90 --> cukup
let BB = 65;
if(BB < 50){
    console.log("Kurus Banget");
} else if(BB < 70){
    console.log("Kurus Aja");
} else if(BB < 90){
    console.log("Cukup");
}