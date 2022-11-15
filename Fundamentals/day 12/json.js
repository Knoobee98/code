let products = {
    name: "umbrella",
    price: 125000,
    variant: [
        {
            color: "purple",
        }, 
        {
            color: "blue",
        }
    ]
}

let saveJSON = JSON.stringify(products);
console.log(saveJSON);
saveJSON = JSON.parse(saveJSON);
console.log(saveJSON.name);