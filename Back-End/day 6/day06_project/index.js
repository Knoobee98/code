let express = require('express');
let app = express();
let PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(201).send('<h1>hello world</h1>')
})

const { myrouter } = require('./routers');
app.use('/myrouter', myrouter);

const { productsRouter } = require('./routers');
app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})