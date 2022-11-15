let startPromise = new Promise((resolve, rejected) => {
    let response = true;

    if (response){
        resolve("success");
    } else {
        rejected("failed");
    }
});

const tryAndCatch = async() => {
    try{
        let result = await startPromise;
        console.log(result);
    } catch(error) {
        console.log("rejected diterima .catch");
    }
}

tryAndCatch();