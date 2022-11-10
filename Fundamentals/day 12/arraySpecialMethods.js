// .forEach ---> tidak menghasilkan array baru, hanya sekedar looping biasa
//parameter 1 untuk mangambil masing-masing value dari dalam index
//parameter 2 untuk mengambil index valuenya
let arr1 = ["A", "B", "C"];
let newArr1 = arr1.forEach(value => {
    return value;
});

// .map ---> menghasilkan array baru, sering digunakan untuk show data on page
let arr2 = ["WD", "UI/UX", "DM"];
let newArr2 = arr2.map((value) => {
    return value;
})

console.log(newArr1);
console.log(newArr2);

//Ex. .map
let dataStudent = [
    {name: "Alfa", gender: "Pria"},
    {name: "tito", gender: "Pria"},
    {name: "mutia", gender: "wanita"},
];

let newDataStudent =  dataStudent.map(value => {
    if(value.gender === "Pria"){
        return `Mr. ${value.name}`;
 } else {
        return `Mrs. ${value.name}`;
    }
 });

let newArr = [];
let newDataforEach = dataStudent.forEach(value => {
    if(value.gender === "Pria"){
        newArr.push(`Mr. ${value.name}`);
 } else {
        newArr.push(`Mrs. ${value.name}`);
    }
});

console.log(dataStudent);
console.log(newDataStudent);
console.log(newArr);

// .filter ---> menghasilkan array baru, sering digunakan untuk filter data
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let result = arr3.filter(value => {
    return value % 2 == 0;
});

console.log(result);