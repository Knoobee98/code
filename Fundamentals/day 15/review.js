//variable / var

//var
// - tidak mengenal scope
// - dapat diduplicate
// - apabila diakses dahulu akan undefined
// - valuenya dapat diubah


//let
// - mengenal scope
// - tidak dapat diduplicate
// - apabila diakses dahulu akan error ReferenceError
// - valuenya dapat diubah

//const
// - mirip seperti let, namun valuenya tidak dapat diubah
const url = 'https://jsonplaceholder/users'

//CRUD menggunakan let
let student1 = "stephen" //declare and assign
let student2 = "Tito" //declare and assign
let student3, student4, student5 //declare
student3 = "Pamela" //assign
student4 = "Mutia" //assign
console.log(student5)
let student6 = "Nathan", student7 = "gilang" //declare and assign muptile
console.log(student1)
student1 = alfa //assign


//const 
const kampus = "BSD";
kampus  = "Batam" // TypError: assignment to constand variable
console.log(kampus)

const arr = [1,2,3];
arr = [] //error, karena mengubah struktur valuenya
arr[0] = 0 //tidak error, karena hanya mengubah value
console.log(arr);

const str = "hello"
const newDir = str.concat(", world")

//mutable dan immutable
//mutable
//variable yang dapat diubah valuenya
let arr = [1,2,3]
let newArr = arr
let newNewArr = [...arr];
newNewArr[0] = 0;
console.log(newNewArr)
console.log(arr)

//immutable
//variable yang tidak dapat diubah valuenya
let strings = "puurwadhika"
let newStrings = strings
newstrings += "Digital Sschool";
console.log(newStrings);
console.log(strings);
