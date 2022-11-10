
let startPromise = new Promise((resolve, rejected) => {
    let response = true;

    if (response){
        resolve("success");
    } else {
        rejected("failed");
    }
});

startPromise
.then((res) => {
    console.log("masuk ke .then")
    console.log(res);
})
.catch((err) => {
    console.log("masuk ke .catch");
    console.log(err);
})
.finally(() => {console.log("finally selalu running")});
