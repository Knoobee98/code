let startPromise = new Promise((resolve, rejected) => {
    let response = {
        status: 200,
        isError: false,
        message: "success tapi error!"
    };

    if (response.status === 200 && response.isError === true){
        resolve(response);
    } else if(response.status === 200 && response.isError === false){
        rejected("failed");
    } else {
        rejected(response);
    }
});

const tryAndCatch = async() => {
    try{
        let result = await startPromise;

        if(result.status === 200 && result.isError === true){
            throw "error dari .then"
        } else {
            console.log("berhasil!");
        }
    } catch(error) {
        console.log(error);
    }
}

tryAndCatch();