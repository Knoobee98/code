//spread operator

let arr1 = ["Dhito", "aswin", "Gilang"]; //arr1 --> immutable
let arr2 = [...arr1]; //... --> spread operator
arr2[0] = "Stephen";
console.log(arr1);
console.log(arr2);

let obj1 = {name: "Dhito"}; //obj1 --> immutable
let obj2 = {...obj1}; //... --> spread operator
obj2.name = "Tito";
console.log(obj1);
console.log(obj2);  