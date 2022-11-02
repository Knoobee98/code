//buatlah sebuah function untuk memvalidasi data email dari setiap user
//apabila email tersebut sesuai, ubah isVerified menjadi true
//apabila email tidak sesuai, ubah isVerified masih tetap null

let users = [
    {username: "bachtiar", email:"bachtiar@gmail.com", isVerified: null},
    {username: "mrafli", email:"mrafli@gmail.com", isVerified: null},
    {username: "vero", email:"veroyahoo.com", isVerified: null},
    ];

function validation(arr){
    for(let i=0; i < arr.length; i++){
        if(arr[i].email.includes("@")){
            arr[i].isVerified = true;
        }
    }
    return arr;
}

function usernameValidation(user){
    // user = [
    //     {username: "", email:"", isVerified: null},
    // ]
    for(let i = 0; i < users.length; i++){
        if(users[i].username == user[0].username && users[i].email == user[0].email && users[i].isVerified == user[0].isVerified){
            return "username already exist!";
        }
    }
    users.push(user[0]);
    return users;
}
// console.log(validation(users));
console.log(usernameValidation([
    {username:"ryan", email:"ryan.trahan@gmail.com", isVerified: null},
]));

