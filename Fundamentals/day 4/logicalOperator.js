// logical operator
// OR ||
//1. apabila salah satu bernilai true, hasil akhir akan bernilai true
//2. apabila semua bernilai false, hasil akhir akan bernilai false
console.log(false || true) // --> true
console.log(false || false) // --> false
console.log(10 > 5 || 10 < 5) // --> true
// AND &&
//1. apabila salah satu bernilai false, hasil akhir akan bernilai false
//2. apabila semua bernilai true, hasil akhir akan bernilai true
console.log(false && true) // --> false
console.log(true && true) // --> true
console.log(10 > 5 && 10 < 5) // --> false
console.log(10<100 && 1000 === "1000") // --> false
// NOT !
//1. apabila bernilai true, hasil akhir akan bernilai false
//2. apabila bernilai false, hasil akhir akan bernilai true
console.log(!true) // --> false
console.log(!false) // --> true
console.log(!(10 > 5)) // --> false
console.log(!(10<100 && 1000 === "1000")) // --> true
