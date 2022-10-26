//mutable & immutable
//mutable sebuah tipe data yang bisa diubah ketika di copy
//immutable sebuah tipe data yang tidak bisa diubah ketika di copy

//mutable
let arr1 = [1,2,3,4,5];
let newarr1 = arr1;
newarr1[0] = 10;
console.log(newarr1);
console.log(arr1);

//immutable
let nama = "defryan";
let newnama = nama;
newnama = "ryan defryan";
console.log(nama);
console.log(newnama);