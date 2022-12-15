const express = require('express');
const app = express();

const PORT = 5005;

app.get('/', (req, res) => {
    res.status(201).send('<h1>Welcome to API</h1>')
});

const { studentRouter } = require('./routers');
app.use('/students', studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})