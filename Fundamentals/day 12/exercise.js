//1. buatlah 2 buah function. function-1 untuk memvalidasi email,
//dan function-2 untuk ngereturn hasil validasi(true/false).
//(buatlah mengggunakan indirect callback maupun direct callback)

//2. buatlah sebuah handling error untuk sebuah promise dengan beragam bentuk bentuk response sbb:
//  - apabila status: 200 dan isError: false, console.log datanya
//  {status: 200, isError: false, message: "login success", isData: true, data: {username: "ryan", isverified: false}}
//  - apabila status: 200 dan isError: true, throw messagenya 
//  {status: 200, isError: true, message: "username already exist", isData: false, data: {}}
//  - apabila status: 500 dan isError: true, tampilkan error messagenya di catch
//  {status: 500, isError: true, message: "login success", isData: false, data: {}}

function EmailCheck(email, cb){
    email = email.toString();
    if(email.includes("@")){
       return cb(true);
    } else {
       return cb(false);
    }
}

function output(data){
    return data.toString();
}

console.log(EmailCheck("fdhuha@gmail.com", output));

console.log(EmailCheck("fdhuha@gmail.com",function output2(data){
    return data.toString()
}));


//2.
let promise1 = new Promise((resolve, reject) => {
    let response = {
        status: 200, 
        isError: false, 
        message: "login success", 
        isData: true, 
        data: {username: "ryan", isverified: false}
    };

    if(response.status === 200 && response.isError === false){
        resolve(response);
    } else if(response.status === 200 && response.isError === true){
        reject(response);
    } else {
        reject(response);
    }
});

let promise2 = new Promise((resolve, reject) => {
    let response = {
        status: 200,
        isError: true,
        message: "username already exist",
        isData: false,
        data: {username: "ryan", isverified: false}
    };


    if(response.status === 200 && response.isError === false){
        resolve(response);
    } else if(response.status === 200 && response.isError === true){
        reject(response);
    } else {
        reject(response);
    }

});

let promise3 = new Promise((resolve, reject) => {
    let response = {
        status: 500, 
        isError: false, 
        message: "login success", 
        isData: false, 
        data: {username: "ryan", isverified: false}
    };

    if(response.status === 200 && response.isError === false){
        resolve(response);
    } else if(response.status === 200 && response.isError === true){
        reject(response);
    } else {
        reject(response);
    }
});

promise1
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

promise2
.then((res) => {
    throw response.message;
})
.catch((err) => {
    console.log(err);
});

promise3
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(response.message);
});