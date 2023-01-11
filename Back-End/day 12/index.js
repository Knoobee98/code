const express = require('express');
const app = express();
const port = 5050;

app.use(express.json());

const {productRouter} = require('./routers');
app.use('/products', productRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})