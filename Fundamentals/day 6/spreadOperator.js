//spread operator
//hanya array dan object yang bisa menggunakan spread operator

let arr1 = ["Dhito", "aswin", "Gilang"]; //arr1 --> immutable
let arr2 = [...arr1]; //... --> spread operator (mengcopy value dari value sebelumnya yang ingin diubah)
arr2[0] = "Stephen";
console.log(arr1);
console.log(arr2);

let obj1 = {name: "Dhito"}; //obj1 --> immutable
let obj2 = {...obj1}; //... --> spread operator (mengcopy value dari value sebelumnya yang ingin diubah)
obj2.name = "Tito";
console.log(obj1);
console.log(obj2); 

//destructuring assignment
let arrData = ["apel", "jeruk", "mangga"];
let [a, b, c] = [...arrData]; //let [a, b, c] = Variable let a, let b, let c
console.log(a);
console.log(b);
console.log(c);
