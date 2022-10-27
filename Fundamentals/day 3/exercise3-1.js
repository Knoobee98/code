
//menentukan kata palindrom atau bukan
// let kata = "katak";
// balik kata-kata yang ada di dalam variabel kata
//bandingkan kata dengan kata yang sudah dibalik
//jika sama, maka kata palindrom
//jika tidak sama, maka bukan palindrom
let kata = "katak", result = "";
kata = kata.toLowerCase();
for(let i = kata.length-1; 0 <= i; i--){
    result += kata[i];
}
console.log(result);
if(kata === result){
    console.log("kata ini palindrome");
} else {
    console.log("kata ini tidak palindrome");
}

//let jawaban = "acdab";
//let kunciJawaban = "abdac";
//jika jawaban benar --> +10 poin
//jika jawaban salah --> -5 poin
let jawaban = "acdab";
let kunciJawaban = "abdac";
let poin = 0;
for(let i = 0; i < jawaban.length; i++){
    if(jawaban[i] === kunciJawaban[i]){
        poin += 10;
    } else {
        poin -= 5;
    }
}
console.log(`poin anda adalah ${poin}`);